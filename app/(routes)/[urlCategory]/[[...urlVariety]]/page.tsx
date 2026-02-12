import { fetchSpirits } from "@/app/lib/data";
import { SpiritProps } from "@/app/lib/definitions";
import Category from "@/app/ui/category";

export default async function Page() {
  // const data = await getData();
  const arr: SpiritProps[] = await fetchSpirits();
  return <Category arr={arr} />;
}
