
export default function DogCollectionBreedsCard({imgSrc}) {
  return ( <div  className='w-96 h-72 '>
              <img
                className='object-fit w-full h-full rounded-xl border-2 border-cyan-200'
                alt=''
                src={imgSrc}
              />
            </div>
  )
}
