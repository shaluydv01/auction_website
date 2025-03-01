import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import FirstPage from "../../components/contentPage/FirstPage";
import SecondPage from "../../components/contentPage/SecondPage";
import ThirdPage from "../../components/contentPage/ThirdPage";

const Home = () => {
  return (
    <div className="h-100 w-100">
      {/* <!------------------------------------------Navbar------------------------------------> */}
      <Navbar />

      {/* <!---------------------------------TorchLight Effect---------------------------------> */}
      <div class="page-container">
        <div id="torchlight"></div>

        {/* <!----------------------------------First Page------------------------------------> */}
        <FirstPage />

      </div>

      {/* <!----------------------------------Second Page------------------------------------> */}
      <SecondPage />

      {/* <!-----------------------------------Third Page----------------------------------------> */}
      <ThirdPage />
    </div>
  );
};

export default Home;
