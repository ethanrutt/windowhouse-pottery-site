import React from "react";
import pottery from "./images/pottery.jpg";
import {
  Table,
  Tr,
  Td,
  Image,
} from "./GalleryElements";
import {
  CenteredH1
} from "./CommonElements";


const Gallery = () => {
  return (
    <>
      <CenteredH1>Gallery</CenteredH1>
      <Table>
        <Tr>
          <Td>
            <Image src={pottery}/>
          </Td>
          <Td>
            <Image src={pottery}/>
          </Td>
          <Td>
            <Image src={pottery}/>
          </Td>
        </Tr>
      </Table>
    </>
  );
};

export default Gallery;

