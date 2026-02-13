import { fetchSpirits } from "@/app/lib/data";
import { SpiritProps } from "@/app/lib/definitions";
import Category from "@/app/ui/category";

export default async function Page() {
  const arr = await fetchSpirits();
  return <Category arr={arr} />;
}
