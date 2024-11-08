import "./App.css";
import ContentCard from "./components/ContentCard";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import thinkAgain from "./assets/thinkAgain.png";
import seo from "./assets/SEO.jpg";
import johnDigi from "./assets/johnDigi.jpg";
import bannerImg from "./assets/heroBanner.jpg";

function App() {
  return (
    <div className="pageContainer">
      <header className="headerContainer">
        <Header />
      </header>
      <div className="heroContainer">
        <HeroBanner bannerImg={bannerImg} />
      </div>
      <div className="cardContainer">
        <ContentCard
          cardImg={johnDigi}
          cardTitle="John's DiGi Den"
          cardDescription="Enter John's DiGi Den & keep up to date with all the latest digital gadgets and news"
        />
        <ContentCard
          cardImg={thinkAgain}
          cardTitle="Think again Auckland"
          cardDescription="SOLD OUT"
        />
        <ContentCard
          cardImg={seo}
          cardTitle="SEO & CRO - Need to Know"
          cardDescription="Delivered in a clear, easy to comprehend manner, this event is ideal for any marketer that wants..."
        />
      </div>
    </div>
  );
}

export default App;
