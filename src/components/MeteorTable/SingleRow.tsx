import React, { useState } from "react";

import { Tr, Td, Input } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

import { SingleRowPageProps, SingleMeteor } from "../../utils/types";
import { handleNoteDelete, handleNoteSubmit } from "../../utils/helpers/noteFunctions";

const SingleRow: React.FC<SingleRowPageProps> = ({ singleMeteor }: SingleRowPageProps) => {
  const meteor: SingleMeteor = {
    name: singleMeteor?.name,
    hazardous: singleMeteor?.is_potentially_hazardous_asteroid,
    diameter: singleMeteor?.estimated_diameter?.kilometers?.estimated_diameter_min?.toFixed(3),
    distance: singleMeteor?.close_approach_data?.[0].miss_distance?.kilometers,
    approachSpeed: singleMeteor?.close_approach_data?.[0].relative_velocity?.kilometers_per_hour,
    approachDate: singleMeteor?.close_approach_data?.[0].close_approach_date,
    id: singleMeteor?.id,
  };

  const [note, setNote] = useState<string>("");

  const noteFromStorage = window.localStorage.getItem(`${meteor.id}`);

  return (
    <Tr>
      <Td textAlign="center">{meteor.approachDate}</Td>
      <Td textAlign="center">{meteor.name}</Td>
      <Td textAlign="center">{meteor.hazardous ? "Hazardous" : "Not Hazardous"}</Td>
      <Td textAlign="center">
        {meteor.diameter}
        (Km)
      </Td>
      <Td textAlign="center">{meteor.distance} (Km)</Td>
      <Td textAlign="center">{meteor.approachSpeed} (Km/h)</Td>
      <Td>
        <Input
          value={!noteFromStorage ? note : `${noteFromStorage}`}
          variant="filled"
          size="sm"
          w={"150px"}
          mr={1}
          bg={"gray.200"}
          onChange={(e) => setNote(e.target.value)}
        />
        <DeleteIcon
          cursor={"pointer"}
          mr={3}
          color="red.500"
          _hover={{
            transform: "scale(1.05)",
          }}
          onClick={() => {
            handleNoteDelete(meteor);
            setNote("");
          }}
        />
        <CheckIcon
          cursor={"pointer"}
          mr={-3}
          color="blue.500"
          _hover={{
            transform: "scale(1.2)",
          }}
          onClick={() => handleNoteSubmit(meteor, note)}
        />
      </Td>
    </Tr>
  );
};

export default SingleRow;
