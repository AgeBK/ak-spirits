import { fetchSpiritById, fetch6BotBySubCategory } from "@/app/lib/data";
import { removeHyphen, toTitleCase } from "@/app/lib/utils";
import Product from "@/app/ui/product";

// The 'params' object contains dynamic segments from the URL
export default async function Page({
  params,
}: {
  params: { urlCategory: string; urlVariety: string; urlId: string };
}) {
  const urlParams = await params; // TODO:
  const { urlId, urlVariety } = urlParams;
  const [productObj = {}, relatedProducts] = await Promise.all([
    fetchSpiritById(urlId),
    fetch6BotBySubCategory(toTitleCase(removeHyphen(urlVariety)), urlId),
  ]);

  return <Product productObj={productObj} relatedProducts={relatedProducts} />;
}
