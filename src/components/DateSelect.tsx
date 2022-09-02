import React, { useContext } from "react";

import { Button, Flex, Input, Text, Container } from "@chakra-ui/react";

import { QuerySearchContext } from "../utils/context";

import { useFormik } from "formik";

const DateSelect: React.FC = () => {
  const { setEndDate, setStartDate, setIsQuerySelected } = useContext(QuerySearchContext);

  const dateFormik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
      setStartDate(values.startDate);
      setEndDate(values.endDate);
      setIsQuerySelected(true);
    },
  });

  return (
    <Container minW="800px" justifyContent={"center"} alignItems={"flex-start"}>
      <Text w="100" color="blue.800" fontSize="xl" mb={2}>
        Pick a date range
      </Text>
      <Flex justifyContent={"space-evenly"} w="100%">
        <Button colorScheme="green" onClick={() => setIsQuerySelected(false)}>
          Today
        </Button>
        <Text pt={"0.5rem"}>or</Text>
        <form
          style={{ width: "80%", display: "flex", justifyContent: "space-around" }}
          onSubmit={dateFormik.handleSubmit}
        >
          <Input
            name="startDate"
            value={dateFormik.values.startDate}
            onChange={dateFormik.handleChange}
            w="35%"
            placeholder="Start Date: YYYY-MM-DD"
          />
          <Input
            name="endDate"
            value={dateFormik.values.endDate}
            onChange={dateFormik.handleChange}
            w="35%"
            placeholder="End Date: YYYY-MM-DD"
          />
          <Button type="submit" colorScheme="blue">
            Go
          </Button>
        </form>
      </Flex>
    </Container>
  );
};

export default DateSelect;
