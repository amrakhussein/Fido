import './Image.css';

export default function Image({ imgSrcs }) {
  console.log('srccss:::', imgSrcs);
  return (
    <>
      {imgSrcs.map((src, idx) => (
        <img className="image" key={idx} src={src} alt="awesome dog images!" />
      ))}
    </>
  );
}
