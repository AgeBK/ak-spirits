import { fetchSpirits } from "@/app/lib/data";
import Category from "@/app/ui/category";
import ManageSideNav from "@/app/ui/manage/manage-sidenav";
import styles from "@/app/css/manage/ManagePage.module.css";

// CategoryMain component used for category page and main manage page
export default async function Page() {
  const arr = await fetchSpirits();

  return (
    <div className={styles.products}>
      <ManageSideNav />
      <Category arr={arr} urlCategory="manage" urlVariety="" />
    </div>
  );
}
