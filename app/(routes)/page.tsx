import { fetchSales6Bot } from "../lib/data";
import Home from "../ui/home";

export default async function Page() {
  const data = await fetchSales6Bot();

  return <Home data={data} />;
}
