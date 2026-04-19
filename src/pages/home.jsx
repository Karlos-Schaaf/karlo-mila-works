import heroImg from "../assets/KARLO Header Image.webp";
import karlomilaPotrait from "../assets/karlomila-homepage.webp";
import GoddessGold from "../assets/goddess+gold-removebg.png";

import "./styling/home.css";

import Footer from "../components/footer/footer";
import HeroImage from "../components/heroImage/heroImage";
import CreditFooter from "../components/creditFooter/creditFooter";
import TextBox from "../components/textBox/textBox";
import QuoteBox from "../components/quoteBox/quoteBox";
import PoemBox from "../components/poemBox/poemBox";
import SectionTitle from "../components/sectionTitle/sectionTitle";

function Home() {
  return (
    <div>
      <HeroImage src={heroImg} alt="Karlo Mila Hero" />
      <CreditFooter text="Artist credit: Huriana Kopeke-Te Ao" />
     <SectionTitle title="Home" /> 
      <div className="bio-section">
        
        <div className="bio-text">
            
  <TextBox paragraphs={[
    "Dr Karlo Mila is an award-winning poet, writer, mother, activist and researcher. She is the author of three books of poetry, including Dream Fish Floating (2005) which won the Jessie MacKay Best First Book of Poetry at the 2006 Montana New Zealand Book Awards. Her most recent book, Goddess Muscle, was released by Huia Publishers in 2020.",
    "She is of Tongan and Pākehā descent, with ancestral connections to Samoa. Born and raised in Aotearoa, New Zealand, her poetry and professional career has focused on the realities of Pasifika identity, love, life and the politics of relationships. In 2019, Karlo was awarded a MNZM for services to the Pacific community and as a Poet. She was the winner of the CNZ Contemporary Pacific Artist Award in 2016.",
    "Career highlights include representing Tonga at the 2012 Cultural Olympiad event Poetry Parnassus Festival in London, a Fulbright Creative Writing Residency in Hawai'i and reading poetry at the Commonwealth Heads of Government Meeting Peoples Forum in 2018.",
    "During the Covid-19 pandemic Karlo started making poetic meditations. You can listen to these on Insight Timer. A writer across many mediums, her work is widely anthologised in Aotearoa and beyond. Her poetry is taught in schools and universities around New Zealand and in the South Pacific. She runs poetry workshops and is regularly invited to be a guest speaker at events. She performs poetry internationally and nationally.",
    "Karlo is the founder and creator of Mana Moana, an indigenous leadership programme and curated collection of learning experiences based on Pacific language and ancestral knowledge. Karlo is the mother of three boys, and step-mother of two children. She lives in Wellington with her partner and whānau."
  ]} />
</div>

        <div className="bio-image-wrapper">
            <div className="image-box">
                <div className="image-frame"></div>
          <img className="portrait-image" src={karlomilaPotrait} alt="Karlo Mila Portrait" />
          <div className="image-frame"></div>
          <CreditFooter text="Photo credit: Raymond Sagapolutele" />
          </div>
        </div>
      </div>

      <QuoteBox />

      <PoemBox
  imageSrc={GoddessGold}
  scrollSpeed={0.4}
  imageAlt="Goddess Muscle artwork"
  title="The Good Wife's Prayer"
  collection="Goddess Muscle, 2020"
  lines={[
    "Let me be faithful,",
    "first to myself.",
    "",
    "Not betray the essence",
    "of who I am",
    "for anybody.",
    "",
    "Not husband,",
    "son, father,",
    "not mother",
    "or daughter.",
    "",
    "Let me be believe",
    "that being faithful,",
    "first,",
    "to myself,",
    "is the ultimate",
    "gift I can give.",
    "",
    "Let me have the courage",
    "to not just live a safe life",
    "or a good life,",
    "but a whole life.",
    "",
    "Feel the full range of feelings.",
    "",
    "Let the energy",
    "within my body",
    "love what it loves,",
    "attract what it attracts,",
    "repel what it repels.",
    "",
    "Let me be free",
    "to be",
    "me",
    "in this moment,",
    "here, right now,",
    "awake",
    "and",
    "fully present.",
    "",
    "Let me",
    "feel the wairua",
    "flow",
    "through me",
    "and greet life",
    "in all",
    "of its",
    "unfolding",
    "incarnations.",
  ]}
/>
    <Footer />
    </div>
  );
}

export default Home;