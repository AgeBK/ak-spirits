import { CategoryListProps } from "@/app/lib/definitions";
// import ProductItem from "@/app/ui/product/product-item";
import ListItem from "./list-item";
import ManageProducts from "./manage/manage-products";
// import ManageHeader from '../manage/manage-header';
// import Loading from './loading';
import styles from "@/app/css/CategoryList.module.css";

export default function CategoryList({
  arr,
  css,
  isManage,
}: CategoryListProps) {
  console.log("CategoryList");
  console.log(isManage);

  // Loads product lists on Category page and Manage products page
  const style = isManage ? "table" : "categoryList";
  const JSX = isManage ? ManageProducts : ListItem;

  return arr.length > 0 ? (
    <div className={styles[style]}>
      <JSX arr={arr} css={css} isManage={isManage} />
    </div>
  ) : (
    <div>Loading...</div>
  );
}
