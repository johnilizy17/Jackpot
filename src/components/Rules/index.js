import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Content() {
    return (
        <Box color="#fff" pt="48px" pl="20px" pr="20px" h="100%">
            <Box fontSize="24px" mb="48px">
                Rules
            </Box>
            <Box background={["#2E2A6F", "transparent", "transparent", "transparent"]} borderRadius="16px" p="20px">
                <Box mb="10px">
                    Normal jackpots are jackpots that have 20% of
                    the previous jackpot as the starting pot.
                </Box>
                <Box mb="10px">
                    Each user makes a bet and if after his bet the
                    timer reaches zero he has won.
                </Box>
                <Box mb="10px">
                    He can choose 3 different bets:
                    <lo>
                        <li>5$ with a 10-minute timer</li>
                        <li>10$ with 5-minute timer</li>
                        <li>20$ with 2.5 minute timer</li>
                    </lo>
                </Box>
                <Box>
                    When a normal jackpot is won a 12h
                    countdown timer is activated for the next
                    normal jackpot.
                </Box>
                <Box>
                    The next normal jackpot will begin when the
                    timer countdown is over and the first bet is
                    made
                </Box>
            </Box>

            <Box h="200px" />
        </Box>
    )
}