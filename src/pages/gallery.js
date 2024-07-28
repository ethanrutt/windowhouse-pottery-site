import React from "react";
import bowl_and_lid from "./images/bowl_and_lid.jpg";
import cherry_bowl from "./images/cherry_bowl.jpg";
import curved_planter from "./images/curved_planter.jpg";
import large_mug from "./images/large_mug.jpg";
import planter_set1 from "./images/planter_set1.jpg";
import planter_set2 from "./images/planter_set2.jpg";
import round_bowl from "./images/round_bowl.jpg";
import rounded_bowl from "./images/rounded_bowl.jpg";
import rounded_vase from "./images/rounded_vase.jpg";

import {
  Table,
  Image,
} from "./styled-components/GalleryElements";
import {
  CenteredH1
} from "./styled-components/CommonElements";


const Gallery = () => {
  return (
    <>
      <CenteredH1>GALLERY</CenteredH1>
      <Table>
        <tr>
          <td>
            <Image src={bowl_and_lid} />
          </td>
          <td>
            <Image src={cherry_bowl} />
          </td>
          <td>
            <Image src={curved_planter} />
          </td>
        </tr>
        <tr>
          <td>
            <Image src={round_bowl} />
          </td>
          <td>
            <Image src={planter_set1} />
          </td>
          <td>
            <Image src={rounded_vase} />
          </td>
        </tr>
        <tr>
          <td>
            <Image src={large_mug} />
          </td>
          <td>
            <Image src={rounded_bowl} />
          </td>
          <td>
            <Image src={planter_set2} />
          </td>
        </tr>
      </Table>
    </>
  );
};

export default Gallery;

