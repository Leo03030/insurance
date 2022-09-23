import Video from "../Video";
import { Wrapper } from "../Wrapper/Wrapper";
import "./Home.css";

const Home = (props) => {
  return (
    <Wrapper>
      <main style={{margin: '0'}}>{<Video />}</main>
    </Wrapper>
  );
};

export default Home;
 