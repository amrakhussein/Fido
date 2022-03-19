export const usePagination = (collection, currentPage, itemsPerPage) => {
    // START INDEX for shallow copy array method slice
    const startIdx = (currentPage - 1) * itemsPerPage
  
    // START INDEX for shallow copy array method slice
    const endIdx = startIdx + itemsPerPage
  
    console.log('startIdx: ', startIdx)
    console.log('endIdx: ', endIdx)
  
    // paginated items
    return collection.slice(startIdx, endIdx)
  }
  