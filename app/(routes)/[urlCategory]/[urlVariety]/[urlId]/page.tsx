import { fetchSpiritById } from "@/app/lib/data";
import Product from "@/app/ui/product";

// The 'params' object contains dynamic segments from the URL
export default async function Page({
  params,
}: {
  params: { urlCategory: string; urlVariety: string; urlId: string };
}) {
  const p = await params;
  const { urlId } = p;

  // const { urlCategory, urlVariety, urlId } = p;
  // console.log(urlCategory, urlVariety, urlId);

  const prod = await fetchSpiritById(urlId);
  return <Product prod={prod} />;
}
