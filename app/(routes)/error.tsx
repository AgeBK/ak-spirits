"use client";

import ErrorMain from "../ui/error-main";
import { errorMsg } from "@/app/lib/appData.json";

export default function Error() {
  // if db error occurs
  return <ErrorMain message={errorMsg} />;
}
