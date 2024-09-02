import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Helo from "./components/Helo";
import Main from "./components/Main";
import Students from "./components/Students";
import Trending from "./components/Trending";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <div className="font-suse">
      <Main />
      <VideoCard />
      <Helo />
      <Trending />
      <Advantages />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
