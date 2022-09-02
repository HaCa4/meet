import React, { useContext } from "react";

import { Flex, Badge } from "@chakra-ui/react";

import { QuerySearchContext } from "../../utils/context";
import { PageIndexProps, PagesArray } from "../../utils/types";

const PageIndex: React.FC<PageIndexProps> = ({ data }: PageIndexProps) => {
  const { pageIndex, setPageIndex, isQuerySelected } = useContext(QuerySearchContext);

  let pages: PagesArray = [];
  if (data && isQuerySelected) {
    pages = Object.keys(data);
  }

  return (
    <Flex alignSelf={"center"} w={"20%"} gap={"2"} cursor="pointer">
      {pages.length > 1 &&
        pages.map((item, index) => {
          return (
            <Badge
              key={index}
              onClick={() => setPageIndex(index)}
              fontSize="1.2rem"
              colorScheme={`${pageIndex === index ? "blue" : "green"}`}
              _hover={{ transform: "scale(1.25)" }}
            >
              {index + 1}
            </Badge>
          );
        })}
    </Flex>
  );
};

export default PageIndex;
