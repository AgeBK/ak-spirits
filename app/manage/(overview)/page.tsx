import { fetchSpirits } from "@/app/lib/data";
import CategoryMain from "@/app/ui/category";
import ManageProducts from "@/app/ui/manage/manage-products";
// import ManageSideNav from '@/app/ui/manage/manage-sidenav';
import styles from "@/app/css/manage/ManageLayout.module.css";
import Category from "@/app/ui/category";

// CategoryMain component used for category page and main manage page
// manage page fetches all products / cateogry page filters by URL
export default async function Page() {
  const arr = await fetchSpirits();
  // console.log(arr);

  return (
    <div className={styles.container}>
      <Category arr={arr} urlCategory="manage" />
    </div>
  );
}
