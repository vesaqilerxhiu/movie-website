import React, { useState, useEffect } from 'react';
import { LinkButton } from '../../components/UI/ButtonGroup';
import './home.scss';

function Home() {

  const [h2Data, setH2Data] = useState([
    { text: "A world of endless entertainment", color: "#FFD700" },
    { text: "Immerse yourself in cinematic delights", color: "#ff7512" },
    { text: "Lights, camera, action!", color: "lightseagreen" }
  ]);
  const [h2Index, setH2Index] = useState(0);

  // useEffect ekzekutohet menjehere pas initial render, pra kur se pari renderohet faqja h2Indexi e ka vleren 0, nuk hyn fare ne ekzekutim useEffecti para renderimit (se mandej i kish ra me qene 1 h2Indexi). Por, pasi renderohet faqja fillon ekzekutimi i useEffect, dmth pas 2.1 sekondave behet nderrimi i indexit dhe ngjyres.
  // When the component first renders, h2Index is initially set to 0, and THEN the useEffect hook runs. 
  // The useEffect hook's effect is executed after the initial rendering is complete and the component is already on the screen.

  useEffect(() => {
    const timer = setInterval(() => {
      setH2Index((prevIndex) => (prevIndex + 1) % h2Data.length);
    }, 2100);

    return () => clearInterval(timer);
  }, [h2Data.length]);

  const { text, color } = h2Data[h2Index];

  return (
    <div className='home-container'>
      <div className='home-intro'>
        <h1>
          Welcome to <span>Cineverse!</span>
        </h1>
        <p>
          Movies move us like nothing else can. They have the power to transport us to different worlds, evoke emotions, and create unforgettable memories. Whether you're seeking thrills, laughter, tears, or love, CINEVERSE is your gateway to a universe of cinematic wonders.
        </p>
        <h2 style={{ color }}>{text}</h2>
        <p>
          Get ready to experience the magic of movies like never before. CINEVERSE invites you to explore, indulge, and be inspired. Step into our world and let the movies ignite your imagination.
        </p>
        <div className='home-buttons'>
          <LinkButton to={"/plans"} label={"Plans and pricing"} />
          <LinkButton to={"/movies"} label={"Watch now"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
