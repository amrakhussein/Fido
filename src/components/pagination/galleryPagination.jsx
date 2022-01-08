import _ from 'lodash';

const Pagination = ({
  collection: totalImgs,
  pageSize: ImgsPerPage,
  onPageChange,
  currentPage,
}) => {
  // const numberOfPages = collection / pageSize
  const numberOfPages = Math.ceil(totalImgs / ImgsPerPage);
  if (numberOfPages === 1) return null;
  console.log('current:::', currentPage);

  const pages = _.range(1, numberOfPages + 1);
  console.log('pages', pages);
  console.log('num', numberOfPages);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page, idx) => {
          return (
            <li
              key={idx}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
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
