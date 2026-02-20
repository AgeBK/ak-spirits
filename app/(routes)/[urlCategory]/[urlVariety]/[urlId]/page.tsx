import { fetchSpiritById, fetchSpiritsBySubCategory } from "@/app/lib/data";
import Product from "@/app/ui/product";

// The 'params' object contains dynamic segments from the URL
export default async function Page({
  params,
}: {
  params: { urlCategory: string; urlVariety: string; urlId: string };
}) {
  const p = await params; // TODO:
  console.log(p);

  const { urlId, urlVariety } = p;

  // const { urlCategory, urlVariety, urlId } = p;
  // console.log(urlCategory, urlVariety, urlId);

  //  const [products, user] = await Promise.all([fetchProducts(), getUser()]);

  const arr = await fetchSpiritById(urlId);
  const similarArr = await fetchSpiritsBySubCategory(urlVariety, urlId);

  return <Product arr={arr} similarArr={similarArr}/>;
}
