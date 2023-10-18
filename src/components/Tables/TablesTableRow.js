import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date, revN } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
		<Tr>
			<Td minWidth={{ sm: "250px" }} pl="0px">
				<Flex
					align="center"
					py=".8rem"
					minWidth="100%"
					flexWrap="nowrap"
				>
					<Avatar
						src={
							"https://th.bing.com/th/id/R.8cd3f0f9dd3d86e8ea838b587e7fe3aa?rik=uPKoc6h8sHuxtQ&riu=http%3a%2f%2ftrashedgraphics.com%2fwp-content%2fuploads%2f2013%2f02%2fvector_cube_illustration.jpg&ehk=NmX8c2A1ZfbtUBnaOHZz%2b7%2fvXLM5fCzQzyp%2fo1iQr%2bA%3d&risl=&pid=ImgRaw&r=0"
						}
						w="30px"
            h="30px"
						borderRadius="12px"
						me="12px"
					/>
					<Flex direction="column">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							minWidth="100%"
						>
							{name}
						</Text>
						<Text
							fontSize="sm"
							color="gray.400"
							fontWeight="normal"
						>
							{email}
						</Text>
					</Flex>
				</Flex>
			</Td>

			<Td>
				<Flex direction="column">
					<Text fontSize="md" color={textColor} fontWeight="bold">
						{domain}
					</Text>
					<Text fontSize="sm" color="gray.400" fontWeight="normal">
						{subdomain}
					</Text>
				</Flex>
			</Td>
			<Td>
				<Text
					fontSize="16px"
				>
					{revN}
				</Text>
			</Td>
			<Td>
				<Text
					fontSize="md"
					color={textColor}
					fontWeight="bold"
					pb=".5rem"
				>
					{date}
				</Text>
			</Td>
			<Td>
				<Button p="0px" bg="transparent" variant="no-hover">
					<Text
						fontSize="md"
						color="gray.400"
						fontWeight="bold"
						cursor="pointer"
					>
						Edit formula
					</Text>
				</Button>
			</Td>
		</Tr>
  );
}

export default TablesTableRow;
