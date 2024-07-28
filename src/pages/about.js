import React from "react";
import {
  CenteredH1,
  CenteredImage,
  P,
} from "../components/Common/CommonElements";

const About = () => {
  return (
    <>
      <CenteredH1>ABOUT</CenteredH1>
      <CenteredImage src="images/windowhouse_logo.jpg"/>
      <div style={{ height: 100 }}></div>
      <P>
        Something I always wanted to try was throwing clay on a wheel, so much
        later in life I decided to finally take a class. That class turned into
        another class and another class…I could not have imagined how much I
        would fall in love with pottery. Since then my husband and I built a
        little pottery studio out of old windows so I could continue to play
        with clay. Window House Pottery was officially established in 2023.
      </P>
      <div style={{ height: 200 }}></div>
    </>
  );
};

export default About;

