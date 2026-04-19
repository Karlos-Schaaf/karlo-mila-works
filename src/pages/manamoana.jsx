import heroImg from "../assets/KARLO Header Image.webp";

import "./styling/manamoana.css";

import Footer from "../components/footer/footer";
import HeroImage from "../components/heroImage/heroImage";
import CreditFooter from "../components/creditFooter/creditFooter";
import TextBox from "../components/textBox/textBox";
import SectionTitle from "../components/sectionTitle/sectionTitle";
import PoemBox from "../components/poemBox/poemBox";

function Manamoana() {
  return (
    <div>
      <HeroImage src={heroImg} alt="Karlo Mila Hero" />
      <CreditFooter text="Artist credit: Huriana Kopeke-Te Ao" />
        
        
       
        <SectionTitle title="Mana Moana" />    
      
      <Footer />
    </div>
  );
}

export default Manamoana;