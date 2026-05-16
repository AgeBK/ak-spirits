import ManageProduct from "@/app/ui/manage/manage-product";
import { productKeys } from "@/app/lib/appData.json";
import styles from "@/app/css/manage/ManagePage.module.css";
import { fetchSpiritById } from "@/app/lib/data";
import { SpiritProps } from "@/app/lib/definitions";
import notFound from "@/app/(routes)/[urlCategory]/[urlVariety]/[urlId]/not-found";

export default async function ManagePage({ params }: ManagePageProps) {
  const { action, id } = await params;
  const product: SpiritProps | undefined = id
    ? await fetchSpiritById(id[0])
    : { ...productKeys }; // fetch product or product shape

  if (product) {
    return (
      <div className={styles.container}>
        <h1 className={styles.hdr}>{`${action} Product`}</h1>
        <div className={styles.product}>
          <ManageProduct product={product} action={action} />
        </div>
      </div>
    );
  }
  notFound(); // TODO: test this
}
