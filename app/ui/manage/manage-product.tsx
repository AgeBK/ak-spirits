"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
// import { useFormState } from "react-dom";
import { useActionState } from "react";
// import { addProduct, updateProduct, deleteProduct } from '@/app/lib/actions';
// import { FormStateProps, ManageProductProps } from '@/app/lib/definitions';
import data from "@/app/lib/appData.json";
import SelectWine from "@/app/ui/manage/select-wine";
import SelectLists from "@/app/ui/manage/select-list";
import InputFields from "./manage-input-fields";
import ManageProductActions from "./manage-product-actions";
import ManageDBMessages from "./manage-db-messages";
import ModalDelete from "./manage-modal-delete";
import ManageImage from "./manage-image";
import styles from "@/app/css/manage/Form.module.css";
import { addProduct, updateProduct } from "@/app/lib/actions";

const initialState: FormStateProps = {
  message: null,
  errors: {},
  success: false,
};

export default function ManageProduct({
  product,
  action,
  // ddlWineItems,
  // ddlItems,
}: ManageProductProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const { id, name } = product;
  //  const { MIN_PRODUCT_ID_LENGTH } = data;
  const isDelete = action === "delete";

  // eslint-disable-next-line
  let currentActionFn: any = null;

  switch (action) {
    case "add":
      currentActionFn = addProduct;
      break;
    case "update":
      currentActionFn = updateProduct.bind(null, id);
      break;
    // case "delete":
    //   currentActionFn = deleteProduct.bind(null, id);
    //   break;
    default:
      break;
  }

  // useFormState first arg expects a function that takes 2 arguments (state, formdata)
  // state is the initial state, formData is automatically added
  // const [state, dispatch] = useActionState(currentActionFn, initialState);
  const [state, formAction, isPending] = useActionState(
    currentActionFn,
    initialState,
  );

  useEffect(() => {
    console.log("UE");

    if (state.success) {
      window.location.href = "/manage";
    }
  }, [state]);

  // product id used for image name when adding product
  const handleChange = ({
    target: { value, id },
  }: ChangeEvent<HTMLInputElement>) => {
    if (id === "id") {
      if (value.length >= 5) {
        // TODO: 5
        setProductId(value);
      } else {
        setProductId("");
      }
    }
  };

  const enableModal = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <form action={formAction} className={styles.container}>
      <InputFields
        product={product}
        isDelete={isDelete}
        handleChange={handleChange}
      />
      {/* <hr /> */}
      {/* <SelectWine ddlWineItems={ddlWineItems} isDelete={isDelete} />
      <SelectLists ddlWineItems={ddlItems} isDelete={isDelete} /> */}
      {/* <ManageImage
        productId={productId || id}
        packaging={ddlItems.packaging as string}
        action={action}
        isDelete={isDelete}
      /> */}
      <ManageProductActions isDelete={isDelete} enableModal={enableModal} />
      {/* <ManageDBMessages errorMessages={state} />
      {showModal && (
        <ModalDelete
          id={id}
          name={name}
          initialState={initialState}
          setShowModal={setShowModal}
        />
      )} */}

      {state.error && <p>{state.error}</p>}
    </form>
  );
}
