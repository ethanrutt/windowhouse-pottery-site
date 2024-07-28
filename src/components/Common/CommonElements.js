import styled from "styled-components";
import white_door from "./white_door.jpg";

/* padding adds 20 px on both sides, so to be equal to image we need
 * orig - 2*padding
 */
const large_screen_img_width = 500;
const small_screen_img_width = 300;
const padding = 20;
const large_screen_text_width = large_screen_img_width - 2 * padding;
const small_screen_text_width = small_screen_img_width - 2 * padding;


export const CenteredH1 = styled.h1`
  text-align: center;
  color: #A9594E;
`;

export const BackgroundImageDiv = styled.div`
  background-image: url(${white_door});
  background-size: cover;
`;

export const CenteredImage = styled.img`
  margin: auto;
  display: block;
  @media (max-width: 700px) {
    width: ${small_screen_img_width}px;
  }
  @media (min-width: 701px) {
    width: ${large_screen_img_width}px;
  }
`;

export const P = styled.p`
  text-align: center;
  color: #A9594E;
  background-color: #F3EFD8;
  margin: auto;
  @media (max-width: 700px) {
    width: ${small_screen_text_width}px;
    padding: ${padding}px;
  }
  @media (min-width: 701px) {
    width: ${large_screen_text_width}px;
    padding: ${padding}px;
  }
`;

