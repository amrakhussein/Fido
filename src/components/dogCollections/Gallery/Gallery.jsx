import { useState, useEffect } from 'react'
import Image from './Image'
import Pagination from '../../common/Pagination'

export default function Gallery({ data }) {
    const [imgs, setImgs] = useState([])
    const imgCount = imgs.length
    let imgLinks = data.map(src => src.url)
    useEffect(() => {
        setImgs([...imgLinks])
    }, [])
    // console.log('img', data)

    const handlePageChange = () => undefined

    return (
        <>
        <Image data={imgs}/>
            <Pagination
            collection={imgCount}
            pageSize={4}
            onPageChange={handlePageChange}
        /> 
        </>
    )
}
