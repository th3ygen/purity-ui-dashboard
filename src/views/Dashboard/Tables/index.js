// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { formulasTable, dashboardTableData } from "variables/general";

function Tables() {
  return (
		<Flex direction="column" pt={{ base: "120px", md: "75px" }}>
			<Authors
				title={"Formulas table"}
				captions={[
					"Title",
					"Person in charge",
					"Revision #",
					"Last revised",
					"",
				]}
				data={formulasTable}
			/>
			{/* <Projects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      /> */}
		</Flex>
  );
}

export default Tables;
