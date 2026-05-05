import ErrorMain from "@/app/ui/error-main";
import { notFoundMsg } from "@/app/lib/appData.json";

export default function NotFound() {
  // if product id on product page is incorrect or no longer exists, this will load
  return <ErrorMain message={notFoundMsg} />;
}
