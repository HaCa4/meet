import React from "react";
import { Tr, Th } from "@chakra-ui/react";

const HeadFootRow: React.FC = () => {
  return (
    <Tr>
      <Th textAlign="center">
        Time of <br /> close Approach
      </Th>
      <Th textAlign="center">Name</Th>
      <Th textAlign="center">
        Potential <br /> Hazard
      </Th>
      <Th textAlign="center">
        Estimated <br /> Diameter
      </Th>
      <Th textAlign="center">
        Miss <br /> Distance
      </Th>
      <Th textAlign="center">Velocity</Th>
      <Th textAlign="center">
        Personal <br /> Notes
      </Th>
    </Tr>
  );
};

export default HeadFootRow;
