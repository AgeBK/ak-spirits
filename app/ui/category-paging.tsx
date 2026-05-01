// import { CategoryPagingProps } from '@/app/lib/definitions';
import Paging from "@/app/ui/paging";
import ItemsPerPage from "@/app/ui/itemsPerPage";
import { CategoryPagingProps } from "../lib/definitions";

export default function CategoryPaging({
  totalPages,
  updatePaging,
  paging,
  totalItems,
} : CategoryPagingProps) {
  return (
    <>
      <Paging
        totalPages={totalPages}
        updatePaging={updatePaging}
        paging={paging}
        totalItems={totalItems}
      />
      <ItemsPerPage
        updatePaging={updatePaging}
        paging={paging}
        totalItems={totalItems}
      />
    </>
  );
}
