import './index.css';
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import BannerImgRight from "./components/BannerImgRight";

function App() {
  return <div>
    <NavBar />
    <HeroBanner />
    <Features />
    <BannerImgRight />
  </div>;
}

export default App;