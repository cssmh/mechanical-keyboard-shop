import AboutUs from "./AboutUs";
import Banner from "./Banner";
// import BLogs from "./Blogs";
import Contact from "./Contact";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Team />
      <Contact />
      {/* <BLogs /> */}
    </div>
  );
};

export default Home;
