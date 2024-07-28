import React from "react";

import {
  Table,
  TableDataImage,
} from "./styled-components/GalleryElements";
import {
  CenteredH1,
} from "../components/Common/CommonElements";


const Gallery = () => {
  return (
    <>
      <CenteredH1>GALLERY</CenteredH1>
      <Table>
        <tr>
          <td>
            <TableDataImage src="images/bowl_and_lid.jpg" />
          </td>
          <td>
            <TableDataImage src="images/cherry_bowl.jpg" />
          </td>
          <td>
            <TableDataImage src="images/curved_planter.jpg" />
          </td>
        </tr>
        <tr>
          <td>
            <TableDataImage src="images/round_bowl.jpg" />
          </td>
          <td>
            <TableDataImage src="images/planter_set1.jpg" />
          </td>
          <td>
            <TableDataImage src="images/rounded_vase.jpg" />
          </td>
        </tr>
        <tr>
          <td>
            <TableDataImage src="images/large_mug.jpg" />
          </td>
          <td>
            <TableDataImage src="images/rounded_bowl.jpg" />
          </td>
          <td>
            <TableDataImage src="images/planter_set2.jpg" />
          </td>
        </tr>
      </Table>
    </>
  );
};

export default Gallery;

