// import { SpiritsProps, ManagePageProps } from '@/app/lib/definitions';
// import { fetchProductById } from '@/app/lib/data';
import ManageProduct from "@/app/ui/manage/manage-product";
import Error from "@/app/(routes)/error";
import { productKeys } from "@/app/lib/appData.json";
import styles from "@/app/css/manage/ManagePage.module.css";
import { fetchSpiritById } from "@/app/lib/data";
import { SpiritProps } from "@/app/lib/definitions";

export default async function ManagePage({ params }: ManagePageProps) {
  // const { selectItems, selectWineItems, productKeys } = data;
  const { action, id } = await params;
  console.log(action);
  console.log(id);

  const product: SpiritProps | undefined = id
    ? await fetchSpiritById(id[0])
    : { ...productKeys }; // fetch product or product shape

  if (product) {
    // remove properties from product obj for other components
    const pickObjItems = (obj: SpiritsProps, arr: string[]) =>
      Object.fromEntries(
        Object.entries(obj).filter(([key]) => {
          if (arr.includes(key)) {
            delete product[key as keyof SpiritsProps];
            return true;
          }
          return false;
        }),
      );

    // const ddlWineItems = pickObjItems(product, selectWineItems);
    // const ddlItems = pickObjItems(product, selectItems);

    return (
      <div className={styles.container}>
        <h1 className={styles.hdr}> {`${action} Product`}</h1>
        <div className={styles.product}>
          <ManageProduct
            product={product}
            action={action}
            // ddlWineItems={ddlWineItems}
            // ddlItems={ddlItems}
          />
        </div>
      </div>
    );
  }
  return <Error />;
}
