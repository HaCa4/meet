import React, { useState } from "react";

import "./App.css";
import { Heading } from "@chakra-ui/react";

import DateSelect from "./components/DateSelect";
import MeteorTable from "./components/MeteorTable/MeteorTable";

import { QuerySearchContext } from "./utils/context";

const App: React.FC = () => {
  const [pageIndex, setPageIndex] = useState<number | undefined>(0);
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [isQuerySelected, setIsQuerySelected] = useState<boolean>(false);

  return (
    <div className="App">
      <QuerySearchContext.Provider
        value={{
          pageIndex,
          startDate,
          endDate,
          isQuerySelected,
          setEndDate,
          setIsQuerySelected,
          setPageIndex,
          setStartDate,
        }}
      >
        <Heading as="h2" size="lg" mb={3}>
          NASA Near Earth Object Web Service(NeoWs) Spreadsheet
        </Heading>
        <DateSelect />
        <MeteorTable />
      </QuerySearchContext.Provider>
    </div>
  );
};

export default App;
