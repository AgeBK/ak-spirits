import { fetchSpirits } from "./lib/data";
import Category from "./ui/category";

export default async function Page() {
  // const data = await getData();
  const arr = await fetchSpirits();
  return <Category arr={arr} />;
}
