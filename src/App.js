import { Divider } from "antd";
import Footer from "./components/Footer";
import InfoContainer from "./components/InfoContainer";
import Navbar from "./components/Navbar";
import FrequentlyAskedQuestions from "./components/F&Q";

function App() {
  return (
    <div>
      <Navbar />
      <InfoContainer />
      <Divider />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}

export default App;
