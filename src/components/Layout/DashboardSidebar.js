import {
	Box,
	Flex,
	Text,
	VStack,
	Link as ChakraLink,
	Divider,
	Button,
	useToast,
	Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { HiSupport } from "react-icons/hi"
import { useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";


function DashboardSidebar({ onboarding = false, admin = false }) {

	const { disconnect } = useDisconnect()

	const menuLinks = [
		{
			id: 1,
			title: "Main Menu",
			getPages: () =>
				[
					{
						id: 1,
						title: "Game",
						path: "/",
						icon: "dashboard.svg",
					},
					{
						id: 2,
						title: "Rules",
						path: "/rules",
						icon: "role.svg",
					},
					{
						id: 2,
						title: "History",
						path: "/history",
						icon: "history.svg",
					},
					{
						id: 3,
						title: "Swap",
						path: "/swap",
						icon: "swap.svg",
					},
					{
						id: 4,
						title: "Dashboard",
						path: "/dashboard",
						icon: "dashboard.svg",
					}
				]


		},
	];
	const router = useRouter();
	const toast = useToast();
	const handleLogout = () => {
		disconnect()
		toast({
			position: "top-right",
			title: "Logged out successfully",
			status: "info",
			isClosable: true,
		});
	};
	return (
		<Flex h="full" w="full" bg="#2E2A6F" flexDir="column" >
			<Box
				w="28"
				mx="auto"
				my="3"
				px="3"
				py="3"
				rounded="md"
				role="button"
				onClick={() => router.push("/")}
			>
				<Image src="/image/trophie.png" w="full" />
			</Box>
			<Flex flexDir="column"
				overflow="scroll" w="full" justify="space-between" h="full" flex="1">
				<VStack spacing="8">
					<VStack w="full" spacing="4">
						{menuLinks.map((menuLink) => (
							<Box w="full" key={menuLink.id}>
								<Text
									fontSize={["sm", "16px"]}
									color="white"
									px="2"
									w="full"
									mb="4"
									fontWeight={"700"}
									display={menuLink.title ? "block" : "none"}
								>
									{menuLink.title}
								</Text>
								<VStack w="full" spacing={["1", "1", "2"]}>
									{menuLink.getPages().map((page) => {
										const linkIsActive = router.pathname.startsWith(page.path);
										return (
											<ChakraLink textDecoration={"none"} as={Link} key={page.id} href={page.path}>
												<Flex
													alignItems="center"
													w="200px"
													position="relative"
													align="center"
													px="4"
												>
													<Button
														colorScheme="green"
														bg={linkIsActive ? "#2E2A6F" : "transparent"}
														w="100%"
														fontWeight={linkIsActive ? "semibold" : "normal"}

													>
														<Image
															w="4"
															filter={
																admin
																	? !linkIsActive
																		? "invert(50%)"
																		: "brightness(0) invert(1)"
																	: "none"
															}
															src={"/svg/" + page.icon}
														/>
														<Text
															isTruncated
															textAlign="left"
															ml="4"
															w="full"
															fontSize={[12, 14, 16]}
															color={
																admin && !linkIsActive ? "grey" : "white"
															}
														>
															{page.title}
														</Text>
													</Button>
												</Flex>
											</ChakraLink>
										);
									})}
								</VStack>
							</Box>
						))}
					</VStack>
				</VStack>
				<Box px="6" pb={["3", "3", "6"]}>
					<Divider mb={["2", "2", "4"]} />
					<ConnectButton
						showBalance={false}
						accountStatus="none"
						chainStatus="none"
					/>
				</Box>
			</Flex>
		</Flex>
	);
}

export default DashboardSidebar;
