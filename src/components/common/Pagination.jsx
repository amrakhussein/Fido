import _ from 'lodash'

const Pagination = ({ collection, pageSize } ) => {
    const numberOfPages = collection / pageSize
    const pages = _.range(1, numberOfPages + 1)
    console.log('pages', pages)
    console.log('num', numberOfPages)
    return ( 
        <nav>
            <ul className="pagination">
                <p className='btn btn-primary'>hello</p>
                {pages.map((page, idx) => {
                    return(

                        <li key={idx} className="page-item"><a href='http' className="page-link">{page}</a></li>
                    )

                })}
                {pages.map(x => <p>{x}</p>)}
            </ul>
        </nav>
     );
}
 
export default Pagination;

