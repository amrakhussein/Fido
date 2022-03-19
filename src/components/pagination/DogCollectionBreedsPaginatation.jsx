
const Pagination = ({
    collection: totalImgs,
    pageSize: ImgsPerPage,
    onPageChange,
    currentPage,
  }) => {
    // const numberOfPages = collection / pageSize
    const numberOfPages = Math.ceil(totalImgs / ImgsPerPage);
    console.log('numberOfPages: ', numberOfPages);
    if (numberOfPages === 1) return null;
    console.log('current:::', currentPage);
  
    // total number of pages
    const pages = [...Array(numberOfPages + 1).keys()]
    console.log('pages', pages);
    console.log('num', numberOfPages);
    return (
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <ul className="">
          {pages.map((page, idx) => {
            return (
  
              <li
                key={idx}
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
                >
                <a  className="cursor-pointer z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={() => onPageChange(page)}>
                  {page}
                </a>
  
              </li>
            );
          })}
          {/* {pages.map((x) => (
            <p>{x}</p>
          ))} */}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  