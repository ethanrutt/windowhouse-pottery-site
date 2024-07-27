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
  Tr,
  Td,
  Image,
} from "./styled-components/GalleryElements";
import {
  CenteredH1
} from "./styled-components/CommonElements";


const Gallery = () => {
  return (
    <>
      <CenteredH1>Gallery</CenteredH1>
      <Table>
        <Tr>
          <Td>
            <Image src={bowl_and_lid} />
          </Td>
          <Td>
            <Image src={cherry_bowl} />
          </Td>
          <Td>
            <Image src={curved_planter} />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src={large_mug} />
          </Td>
          <Td>
            <Image src={planter_set1} />
          </Td>
          <Td>
            <Image src={planter_set2} />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src={round_bowl} />
          </Td>
          <Td>
            <Image src={rounded_bowl} />
          </Td>
          <Td>
            <Image src={rounded_vase} />
          </Td>
        </Tr>
      </Table>
    </>
  );
};

export default Gallery;

