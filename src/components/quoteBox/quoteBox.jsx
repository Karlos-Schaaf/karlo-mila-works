import "./quoteBox.css";

const leftQuotes = [
  {
    text: "I was utterly spellbound by her words, at times punching the air in triumph and at others sobbing into tissues.",
    attribution: "Rebekah Lyell",
    source: "NZ Booklovers Review",
  },
  {
    text: "Some poetry knows us so intimately, it's as if the words weren't just written for us, but about us…",
    attribution: "Nadine Hura",
    source: "Spinoff Review of Books",
  },
];

const rightQuotes = [
  {
    text: "Reading Mila's poems helped my bones recollect where they've come from.",
    attribution: "Rhegan Tu'akoi",
    source: "The Pantograph Punch",
  },
  {
    text: "She is the quintessential New Zealand poet. No longer are we just men alone but women in community with our ancestors.",
    attribution: "Sarah Maindonald",
    source: "Takahe Magazine Book Review",
  },
];

function QuoteCard({ text, attribution, source }) {
  return (
    <blockquote className="quote-card">
      <p className="quote-text">"{text}"</p>
      <footer className="quote-attribution">
        <strong>{attribution}</strong>
        <span className="quote-source">, {source}</span>
      </footer>
    </blockquote>
  );
}

function QuoteBox() {
  return (
    <section className="quote-section">
      <div className="quote-columns">
        <div className="quote-column">
          {leftQuotes.map((q, i) => <QuoteCard key={i} {...q} />)}
        </div>
        <div className="quote-column">
          {rightQuotes.map((q, i) => <QuoteCard key={i} {...q} />)}
        </div>
      </div>
    </section>
  );
}

export default QuoteBox;