export default function DogCollectionBreedsCard({
  imgSrc,
  enlargeImg,
  setEnlargeImg,
  handleImgClick,
}) {
  return (
    <div
      onClick={(e) => {
        setEnlargeImg(!enlargeImg)
        handleImgClick(e)
      }}
      className=' xl:w-96 xl:h-72 2xl:w-[23rem] '
    >
      <img
        className=' cursor-pointer object-fit w-full h-full rounded-xl border-2 border-cyan-200'
        alt='image of a dog breed'
        src={imgSrc}
      />
    </div>
  )
}
