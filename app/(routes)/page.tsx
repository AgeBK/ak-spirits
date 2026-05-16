import { fetch6Bot, fetchSalesItems } from "../lib/data";
import appData from "../lib/appData.json";

import Home from "../ui/home";

export default async function Page() {
  const { homePageItems } = appData;
  const data = await fetchSalesItems(homePageItems);
  return <Home data={data} />;
}
