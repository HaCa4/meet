import React, { useContext } from "react";

import { Table, Thead, Tbody, Tfoot, TableCaption, TableContainer } from "@chakra-ui/react";

import SingleRow from "./SingleRow";
import HeadFootRow from "../HeadFootRow";
import PageIndex from "./PageIndex";

import axios from "../../utils/axios";
import { todayDate } from "../../utils/helpers/getToday";
import { QuerySearchContext } from "../../utils/context";
import { PagesArray, SingleMeteorData } from "../../utils/types";

import qs from "qs";
import { useQuery } from "react-query";

const MeteorTable: React.FC = () => {
  const { isQuerySelected, startDate, endDate, pageIndex } = useContext(QuerySearchContext);

  const query = qs.stringify({
    start_date: !isQuerySelected ? todayDate : startDate,
    end_date: !isQuerySelected ? todayDate : endDate,
  });

  const { data, status } = useQuery(
    ["meteors", query],
    () => axios.get(`feed?${query}`).then((res) => res.data["near_earth_objects"]),
    { staleTime: 30000, refetchIntervalInBackground: true }
  );

  let pages: PagesArray = [];
  let currentPage: string = "";

  if (data && pageIndex !== undefined) {
    pages = Object.keys(data);
    currentPage = pages[pageIndex];
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          <PageIndex data={data} />
        </TableCaption>
        <Thead>
          <HeadFootRow />
        </Thead>
        <Tbody>
          {status === "error" && (
            <tr>
              <td>FACED WITH AN ERROR WHILE FETCHING THE ASTEROIDS</td>
            </tr>
          )}
          {status === "loading" && (
            <tr>
              <td>ASTEROID INFORMATION TABLE IS LOADING</td>
            </tr>
          )}
          {status === "success" &&
            data[currentPage ? currentPage : todayDate]?.map(
              (singleMeteor: SingleMeteorData, index: number) => {
                return <SingleRow key={index} singleMeteor={singleMeteor} />;
              }
            )}
        </Tbody>
        <Tfoot>
          <HeadFootRow />
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MeteorTable;
