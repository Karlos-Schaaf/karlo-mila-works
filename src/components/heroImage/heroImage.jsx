import "./heroImage.css";

function HeroImage({ src, alt }) {
  return (
    <div className="hero-container">
      <img className="hero-image" src={src} alt={alt} />
    </div>
  );
}

export default HeroImage;