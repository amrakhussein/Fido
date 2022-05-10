export const usePagination = (collection, currentPage, itemsPerPage) => {
  
    // START INDEX for shallow copy array method slice
    const startIdx = (currentPage - 1) * itemsPerPage
  
    // START INDEX for shallow copy array method slice
    const endIdx = startIdx + itemsPerPage

    // paginated items
    return collection.slice(startIdx, endIdx)
  }
  