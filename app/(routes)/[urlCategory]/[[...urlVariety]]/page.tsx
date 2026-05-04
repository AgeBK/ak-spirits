import { fetchSpirits, fetchSpiritsBySubCat } from "@/app/lib/data";
import { CategoryPageProps } from "@/app/lib/definitions";
import { capitalizeFirstLetter } from "@/app/lib/utils";
import Category from "@/app/ui/category";

export default async function Page({
  params,
}: {
  params: Promise<{ urlCategory: string; urlVariety: string[] }>;
}) {
  const { urlCategory, urlVariety } = await params;
  const variety = urlVariety ? urlVariety.toString() : "";

  const arr: CategoryPageProps = urlVariety
    ? await fetchSpiritsBySubCat(capitalizeFirstLetter(variety))
    : await fetchSpirits();

  return <Category arr={arr} urlCategory={urlCategory} urlVariety={variety} />;
}
