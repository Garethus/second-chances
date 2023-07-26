import React from "react";
import coverImg from "../assets/cover.jpg";

const myStyle = {
  backgroundImage: `url(${coverImg})`,
  height: '100vh',
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  return (
    <main>
      <div
        className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
        style={myStyle}
      >
        <div className="py-2">
          <h3>
            Give old phones SECOND-CHANCES.
          </h3>
          <h3>
            It's good for your wallet and the environment.
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Home;