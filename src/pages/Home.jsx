import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {

  const [tutorials, setTutorials] = useState([]);

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials = async() => {
   try {
    const { data } = await axios(url);
    console.log(data);
    setTutorials(data);
   } catch (error) {
    console.log(error)
   }
  }

 useEffect(() => {
  getTutorials();
 }, []);
 
  return (
    <>
      <AddTutorial tutor = {tutorials}/>
      <TutorialList />
    </>
  );
};

export default Home;
