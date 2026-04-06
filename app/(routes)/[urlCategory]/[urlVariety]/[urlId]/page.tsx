import { fetchSpiritById, fetch6BotBySubCategory } from "@/app/lib/data";
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
  const productObj = await fetchSpiritById(urlId); // TODO: change to data
  const similarArr = await fetch6BotBySubCategory(urlVariety, urlId);

  return <Product productObj={productObj} similarArr={similarArr} />;
}
