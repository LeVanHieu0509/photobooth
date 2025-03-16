import Icons from "@/components/icons";
import useWindowResize from "@/hooks/use-window-resize";
import { Next, PageNumber, PaginationWrapper, Previous } from "./styled";

interface NumberPaginationProps {
  totalPage: number;
  currentPage: number;
  onChangePage: (value: any) => void;
}

function pagination(c: number, m: number) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

function NumberPagination({ totalPage, currentPage, onChangePage }: NumberPaginationProps) {
  const size = useWindowResize();

  const renderListMobile = () => {
    let result = [];
    if (totalPage <= 4) {
      for (let i = 1; i <= totalPage; i++) {
        result.push(
          <PageNumber key={i} className={i === currentPage ? "active" : undefined} onClick={() => onChangePage(i)}>
            {i}
          </PageNumber>
        );
      }
    } else {
      let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
      let end = currentPage + 2 >= totalPage ? totalPage : currentPage + 2;
      for (let i = start; i <= end; i++) {
        result.push(
          <PageNumber key={i} className={i === currentPage ? "active" : undefined} onClick={() => onChangePage(i)}>
            {i}
          </PageNumber>
        );
      }
    }
    return result;
  };

  const renderListDesktop = () => {
    let result = [];
    if (totalPage <= 10) {
      for (let i = 1; i <= totalPage; i++) {
        result.push(
          <PageNumber key={i} className={i === currentPage ? "active" : undefined} onClick={() => onChangePage(i)}>
            {i}
          </PageNumber>
        );
      }
    } else {
      const listDot = pagination(currentPage, totalPage);
      result = listDot.map((item, index) => {
        if (item === "...") {
          return <PageNumber key={index}>{item}</PageNumber>;
        } else {
          return (
            <PageNumber
              key={index}
              className={item === currentPage ? "active" : undefined}
              onClick={() => onChangePage(item)}
            >
              {item}
            </PageNumber>
          );
        }
      });
    }
    return result;
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [currentPage]);

  return (
    <PaginationWrapper>
      <Previous disabled={currentPage === 1} onClick={() => onChangePage(currentPage - 1)}>
        <Icons icon="arrow-paginate-left" />
      </Previous>
      {(size.width as unknown as number) > 768 ? renderListDesktop() : renderListMobile()}
      <Next disabled={currentPage === totalPage} onClick={() => onChangePage(currentPage + 1)}>
        <Icons icon="arrow-paginate-right" />
      </Next>
    </PaginationWrapper>
  );
}

export default NumberPagination;
