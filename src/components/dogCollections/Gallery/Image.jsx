import './Image.css'

export default function Image({data: imgs}) {
    return (
        <>
        {imgs.map((src, idx) => <img className='image' key={idx} src={src} alt='awesome dog images!' />)}
        </>
    )
}
