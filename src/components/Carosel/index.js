import "./index.css";
export function Carosel({ text, link }) {
  return (
    <div className="carosel-sect">
      <p className="heading-text">{text}</p>
      <div className="img-sect">
        <img src={link} alt="placeholder-img" className="img" id="img1" />
        <img src={link} alt="placeholder-img" className="img" id="img2" />
        <img src={link} alt="placeholder-img" className="img" id="img3" />
        <img src={link} alt="placeholder-img" className="img" id="img4" />
        <img src={link} alt="placeholder-img" className="img" id="img5" />
      </div>
    </div>
  );
}
