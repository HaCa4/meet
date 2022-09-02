import React, { useContext, useState } from "react";

import { Button, Flex, Input, Text, Container } from "@chakra-ui/react";

import { QuerySearchContext } from "../utils/context";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const DateSelect: React.FC = () => {
  const { setEndDate, setStartDate, setIsQuerySelected } = useContext(QuerySearchContext);

  const [startDateFromPicker, setStartDateFromPicker] = useState(new Date());
  const [endDateFromPicker, setEndDateFromPicker] = useState(new Date());

  const onGoDateHandler = () => {
    setStartDate(format(startDateFromPicker, "yyyy-MM-dd"));
    setEndDate(format(endDateFromPicker, "yyyy-MM-dd"));
    setIsQuerySelected(true);
  };

  return (
    <Container minW="400px" justifyContent={"center"} alignItems={"flex-start"}>
      <Text w="100" color="blue.800" fontSize="xl" mb={2}>
        Pick a date range
      </Text>
      <Flex justifyContent={"space-evenly"} w="100%">
        <Button px={"2rem"} colorScheme="green" onClick={() => setIsQuerySelected(false)}>
          Today
        </Button>
        <Text pt={"0.5rem"}>or</Text>
        <Flex>
          <DatePicker
            selected={startDateFromPicker}
            onChange={(date: Date) => setStartDateFromPicker(date)}
            className="picker"
          />
          <DatePicker
            selected={endDateFromPicker}
            onChange={(date: Date) => setEndDateFromPicker(date)}
            className="picker"
          />
          <Button px={"2rem"} onClick={() => onGoDateHandler()} colorScheme="blue">
            Go
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DateSelect;
