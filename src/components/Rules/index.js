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
    <Box>
                    The big jackpot is activated when it reaches a
certain number of USDC as a prize or when a
certain number of bets have been placed in
the normal jackpot.
    </Box>
    <Box>
Let's assume it activates when it reaches 10k
USDC:
    </Box>
    <Box>
when the normal jackpot ends and you deposit
your 20% into the big jackpot and this is equal
to or greater than 10k the normal jackpots are
suspended. the big jackpot timer will count
down for 12 h.
    </Box>
    <Box>
When it reaches 0 and the first bet is placed
the jackpot starts.
                        </Box>
    <Box>
The methods of betting and winnings are the
same as those of the normal jackpot.
When the big jackpot ends the normal jackpot
timer will count down for 12 h. and when it
reaches 0 and the first bet is made the normal
jackpots start again (read normal jackpot)    
                        </Box>
    
    <Center fontWeight="800" fontSize="16px">Bomb Price </Center>
<Box>
    The BOMB prize is a prize that is awarded
randomly during a normal jackpot and reloads
with the split of the normal jackpot prizes.
It will be random for the user while we will set
that it will have a logic or every tot bets, but
the users will not know it.
                        </Box>
    <Box>
When the BOMB is triggered the background
of that jackpog will change color.
                        </Box>
    <Box>
Once the normal jackpot is over, 50% of the
bomb prize will be given randomly to one of
the participants of that normal jackpot who is
not the jackpot winner.
                        </Box>
    </Box>

            <Box h="200px" />
        </Box>
    )
}
