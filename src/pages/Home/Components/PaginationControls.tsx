import { usePodcastFilters } from "../hooks/usePodcastFilters";

/**
 * The pagination controls for the currently displayed list of podcasts
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Pagination controls />
 *
 * @param {number} totalPages - The total number of pages
 * @returns {JSX.Element} - The page numbers
 */
export function PaginationControls(props: { totalPages: number }) {
  const pageNumbers = [];
  const { totalPages } = props;
  const { page, setFilters } = usePodcastFilters();
  const currentPage = page;

  for (let i = -2; i < 3; i++) {
    if (0 < currentPage + i && currentPage + i <= totalPages) {
      const pageNumber = currentPage + i;
      pageNumbers.push(pageNumber);
    }
  }

  return (
    <div style={paginationStyles}>
      {currentPage > 1 && (
        <button
          className="pageButton"
          onClick={() => setFilters({ page: `${currentPage - 1}` })}
        >
          Previous
        </button>
      )}

      {pageNumbers.map((num) => (
        <button
          key={`page ${num}`}
          className="pageButton"
          onClick={() => setFilters({ page: `${num}` })}
        >
          {num === currentPage ? <u>{num}</u> : <>{num}</>}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className="pageButton"
          onClick={() => setFilters({ page: `${currentPage + 1}` })}
        >
          Next
        </button>
      )}
    </div>
  );
}

const paginationStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "max",
  margin: "3rem 0",
};
