export default function DogCollectionBreedsGallery({ imgSrcs }) {
  console.log('imgSrcs: ', imgSrcs)

  return (
    <>
      <main>
        <section className='mt-20 gap-4 grid grid-cols-4 px-5 place-ditems-center justify-items-center '>
          {/* {imgSrcs && (imgSrcs?.map((src, idx) => (
            <>
          <div key={idx} className="w-96 h-72  ">
            <img className="object-fit w-full h-full rounded-xl border-2 border-cyan-200" key={idx} alt='' src={src} />
            </div>
            </>
            )))} */}

          {imgSrcs?.map((src, idx) => (
            <div key={idx} className='w-96 h-72  '>
              <img
                className='object-fit w-full h-full rounded-xl border-2 border-cyan-200'
                key={idx}
                alt=''
                src={src}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
