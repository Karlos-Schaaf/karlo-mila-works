import { useEffect, useRef } from "react";
import "./poemBox.css";

function PoemBox({ title, collection, lines, imageSrc, imageAlt, reverse, scrollSpeed = 0.5 }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageSrc) return;
    const handleScroll = () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      if (!section || !image) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const imageHeight = image.offsetHeight;

      const scrolled = -sectionTop;
      const maxScroll = sectionHeight - imageHeight;
      const clamped = Math.max(0, Math.min(scrolled, maxScroll));

      image.style.transform = `translateY(${clamped * scrollSpeed}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageSrc, scrollSpeed]);

  return (
    <section className={`poem-section ${reverse ? "poem-reverse" : ""}`} ref={sectionRef}>
      <div className="poem-inner">
        {imageSrc && (
          <div className="poem-image-wrapper">
            <img className="poem-image" ref={imageRef} src={imageSrc} alt={imageAlt} />
          </div>
        )}
        <div className="poem-content">
          <h2 className="poem-title">{title}</h2>
          <p className="poem-collection">{collection}</p>
          <div className="poem-body">
            <div className="poem-text-wrapper">
              {lines.map((line, index) =>
                line === "" ? (
                  <br key={index} />
                ) : (
                  <span key={index} className="poem-line">{line}</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoemBox;