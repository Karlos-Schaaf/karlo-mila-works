import { useEffect, useRef } from "react";
import "./readContent.css";

function PoemColumn({ title, collection, lines }) {
  return (
    <div className="read-content-poem">
      <h3 className="read-content-title">{title}</h3>
      <p className="read-content-collection">{collection}</p>
      <div className="read-content-lines">
        {lines.map((line, index) =>
          line === "" ? (
            <br key={index} />
          ) : (
            <span key={index} className="read-content-line">{line}</span>
          )
        )}
      </div>
    </div>
  );
}

function ImageColumn({ imageSrc, imageAlt, imageCredit }) {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const wrapper = wrapperRef.current;
      if (!section || !wrapper) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const wrapperHeight = wrapper.offsetHeight;

      const scrolled = -sectionTop - 30;
      const maxScroll = sectionHeight - wrapperHeight;
      const clamped = Math.max(0, Math.min(scrolled, maxScroll));

      wrapper.style.transform = `translateY(${clamped}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="read-content-image-column" ref={sectionRef}>
      <div className="read-content-image-wrapper" ref={wrapperRef}>
        <div className="read-content-image-frame">
          <img className="read-content-image" src={imageSrc} alt={imageAlt} />
        </div>
        {imageCredit && (
          <p className="read-content-image-credit">{imageCredit}</p>
        )}
      </div>
    </div>
  );
}

function ReadContent({ entries = [] }) {
  return (
    <section className="read-content-section">
      {entries.map((entry, index) => {
        const isLeft = index % 2 === 0;
        const poem = (
          <div className="read-content-cell">
            <PoemColumn
              title={entry.title}
              collection={entry.collection}
              lines={entry.lines}
            />
          </div>
        );
        const image = entry.imageSrc ? (
          <ImageColumn
            imageSrc={entry.imageSrc}
            imageAlt={entry.imageAlt}
            imageCredit={entry.imageCredit}
          />
        ) : (
          <div className="read-content-cell" />
        );

        return (
          <div className="read-content-row" key={index}>
            {isLeft ? <>{poem}{image}</> : <>{image}{poem}</>}
          </div>
        );
      })}
    </section>
  );
}

export default ReadContent;