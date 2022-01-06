import "./index.css";
export function Carosel({ text, link }) {
  return (
    <div class="carosel-sect">
      <p class="heading-text">{text}</p>
      <div class="img-sect">
        <img src={link} alt="placeholder-img" class="img" />
        <img src={link} alt="placeholder-img" class="img" />
        <img src={link} alt="placeholder-img" class="img" />
        <img src={link} alt="placeholder-img" class="img" />
        <img src={link} alt="placeholder-img" class="img" />
        
      </div>
    </div>
  );
}
