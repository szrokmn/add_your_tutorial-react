import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async() => {
    const data = await axios(url);
    console.log(data);
  }

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
