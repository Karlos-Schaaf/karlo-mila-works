import headerImg from "../assets/KARLO Header Image.webp";
import karlomilaPotrait from "../assets/karlomila-homepage.webp";


import "./styling/home.css";

import CreditFooter from "../components/creditFooter/creditFooter";
import TextBox from "../components/textBox/textBox";

function Home() {
  return (
    <div>
    <div className="hero-container">
      {/* Hero Image */}
      <img className="hero-image" src={headerImg} alt="Karlo Mila Hero" />

      {/* Footer credit for the image */}
      <CreditFooter text="Artist credit: Huriana Kopeke-Te Ao" />
</div>

      {/* Optional Text Box */}
      <TextBox text="Dr Karlo Mila is an award-winning poet, writer, mother, activist and researcher.  She is the author of three books of poetry, including Dream Fish Floating (2005) which won the Jessie MacKay Best First Book of Poetry at the 2006 Montana New Zealand Book Awards. Her most recent book, Goddess Muscle, was released by Huia Publishers in 2020.

She is of Tongan and Pākehā descent, with ancestral connections to Samoa. Born and raised in Aotearoa, New Zealand, her poetry and professional career has focused on the realities of Pasifika identity, love, life and the politics of relationships. In 2019, Karlo was awarded a MNZM for services to the Pacific community and as a Poet. She was the winner of the CNZ Contemporary Pacific Artist Award in 2016.

Career highlights include representing Tonga at the 2012 Cultural Olympiad event Poetry Parnassus Festival in London, a Fulbright Creative Writing Residency in Hawai’i and reading poetry at the Commonwealth Heads of Government Meeting Peoples Forum in 2018. 

During the Covid-19 pandemic Karlo started making poetic meditations. You can listen to these on Insight Timer. A writer across many mediums, her work is widely anthologised in Aotearoa and beyond. Her poetry is taught in schools and universities around New Zealand and in the South Pacific. She runs poetry workshops and is regularly invited to be a guest speaker at events. She performs poetry internationally and nationally.

Karlo is the founder and creator of Mana Moana, an indigenous leadership programme and curated collection of learning experiences based on Pacific language and ancestral knowledge. Karlo is the mother of three boys, and step-mother of two children. She lives in Wellington with her partner and whānau. " />

      
      <img className="portrait-image" src={karlomilaPotrait} alt="Karlo Mila Potrait" />
    

    </div>
  );
}

export default Home;