import NumberPagination from "./number";
import { PaginationWrapper } from "./styled";

export type Limit = 5 | 10 | 20 | 30 | 40 | 50;

interface PaginationProps {
  limited?: Limit;
  totalPage: number;
  currentPage: number;
  showLimit?: boolean;
  onChangePage: (page: number) => void;
  onChangeLimited?: (limited: Limit) => void;
}

const Pagination = ({
  limited,
  totalPage,
  currentPage,
  showLimit = true,
  onChangeLimited,
  onChangePage,
}: PaginationProps) => {
  return (
    <PaginationWrapper>
      {/* {showLimit && <SelectLimited value={limited} onChange={onChangeLimited} />} */}
      <NumberPagination totalPage={totalPage} currentPage={currentPage} onChangePage={onChangePage} />
    </PaginationWrapper>
  );
};

export default Pagination;
