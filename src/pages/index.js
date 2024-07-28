import React from 'react';
import {
  CenteredH1,
  CenteredImage,
  P,
} from "../components/Common/CommonElements";

const Home = () => {
  return (
    <>
      <CenteredH1>HOME</CenteredH1>
      <CenteredImage src="images/windowhouse_logo.jpg"/>
      <div style={{ height: 100 }}></div>
      <P>
        Kimberly is a hobby potter developing her art one pot at a time.
      </P>
      <div style={{ height: 200 }}></div>
    </>
  );
};

export default Home;

