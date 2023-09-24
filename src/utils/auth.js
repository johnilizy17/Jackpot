import { createStandaloneToast } from "@chakra-ui/react";
import axios from "axios";
import Router from "next/router";

const toast = createStandaloneToast({

	defaultOptions: {
		position: "top-right",
		status: "error",
		isClosable: true,
	},
});
// const toast = createStandaloneToast({theme: theme});

const displayError = (description) => {
	if (description) {
		toast({
			position: "top-right",
			title: "Error",
			description,
			status: "error",
			isClosable: true,
		});
	}
};

export const authService = axios.create({ baseURL: "https://regiz.cyclic.app/" });

