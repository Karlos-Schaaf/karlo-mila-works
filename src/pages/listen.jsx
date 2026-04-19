import heroImg from "../assets/KARLO Header Image.webp";
import karloReading from "../assets/karlo+in+black+reading.webp";
import "./styling/listen.css";

import Footer from "../components/footer/footer";
import HeroImage from "../components/heroImage/heroImage";
import CreditFooter from "../components/creditFooter/creditFooter";
import TextBox from "../components/textBox/textBox";
import SectionTitle from "../components/sectionTitle/sectionTitle";
import PoemBox from "../components/poemBox/poemBox";

function Listen() {
  return (
    <div>
      <HeroImage src={heroImg} alt="Karlo Mila Hero" />
      <CreditFooter text="Artist credit: Huriana Kopeke-Te Ao" />
        
        
       
        <SectionTitle title="Listen" />    
      <PoemBox
  imageSrc={karloReading}
  scrollSpeed={0.24}
  imageAlt="Karlo Mila reading poetry"
  title="Everyday Allegories"
  collection="For Hāora — New Works"
  lines={[
    "He asks,",
    "where are all the love poems, love?",
    "Light-in-light brown eyes, teasing.",
    "",
    "Beloved,",
    "the poet writes,",
    "",
    "the poems",
    "are folded carefully",
    "in the dishcloth,",
    "I've trained myself",
    "not to leave in the sink.",
    "",
    "The poems are gleaming",
    "in the silver stainless shine",
    "of the frothing wand",
    "on the espresso machine,",
    "that I am trying to clean,",
    "after every use.",
    "",
    "The poems are in the wash",
    "with only",
    "teatowels",
    "and",
    "tablecloths.",
    "Separate.",
    "",
    "In the remembering",
    "of putting the keys",
    "in the same place",
    "each day. Regular.",
    "",
    "The poems are in the braised",
    "chicken, left to slow-cook",
    "into something sumptuous,",
    "consulting Alison Holst",
    "as well as Annabel,",
    "googling five star recipes,",
    "buying dried and canned apricots both.",
    "",
    "They are in the off-recipe",
    "swish of white wine",
    "that was good enough to drink,",
    "in the last minute acidic",
    "of apple cider vinegar,",
    "in the contraband crumble of brown sugar,",
    "the secret of fish sauce.",
    "",
    "The poems are in the seven spoonfuls",
    "of tasting, testing, adding, adjusting.",
    "",
    "In the way I bring everything",
    "to the table.",
    "",
    "This is where the poems are love.",
    "The lines are",
    "in my everyday edits.",
    "In the crossing out,",
    "in the keeping.",
    "",
    "Not in the lilting, longing of long distant text",
    "where all is dependent on the figurative,",
    "but in the figuring out.",
    "",
    "For this is no flash in the pan,",
    "the love poems are to be found",
    "in the soft stewing of apricots",
    "mixed with meat,",
    "falling off the bone.",
    "",
    "In the cleaning up as I go.",
  ]}
/>
      <Footer />
    </div>
  );
}

export default Listen;