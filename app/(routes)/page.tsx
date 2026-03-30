import { fetch6Bot, fetchSalesItems } from "../lib/data";
import appData from "../lib/appData.json";

import Home from "../ui/home";

export default async function Page() {
  const { homePageItems } = appData;
  //  const [products, user] = await Promise.all([fetchProducts(), getUser()]);
  const data = await fetchSalesItems(homePageItems);
  // const similarArr = await fetch6Bot();

  return <Home data={data} />;
}
