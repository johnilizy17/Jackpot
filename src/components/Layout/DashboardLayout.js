import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from ".";
import DashboardSidebar from "./DashboardSidebar";

function DashboardLayout({ children, onboarding = true, admin = true}) {
	return (
		<Flex w="full" minH="100vh">
			<Box
				w="75"
				borderRightWidth="thin"
				borderColor="gray.100"
				display={["none", "none", "block"]}
				flexShrink="0"
				bg={"#2E2A6F"}
				h="100vh"
				position="sticky"
				top="0"
			>
				<DashboardSidebar onboarding={onboarding} admin={admin} />
			</Box>
			<Flex flex="1" w="full" flexDir="column">
				<Box w="full" borderBottomWidth="thin" borderBottomColor="gray.100">
					<Header />
				</Box>
					{children}
				{/* </Container> */}
			</Flex>
		</Flex>
	);
}

export default DashboardLayout;
