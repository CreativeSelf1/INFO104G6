import { Box, Flex } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react'

const MapUI = ({ item }) => {
    return (
        <div id="mapUi">
            <Flex top="-100px">
                <Box paddingTop="2px">
                    <Accordion allowToggle border="1px" w="300px" borderColor="green" borderRadius="9px">
                        <AccordionItem borderRadius="10px">
                            <h2>
                                <AccordionButton borderRadius="9px"  _expanded={{ bg: 'green', color: 'white' }}>  
                                    <Box flex='1' textAlign='center'>
                                        <p>{item.id}</p>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign='center'>
                                <p>{item.title + "\n"}</p><br></br>
                                <p>{item.salas + "  "} </p>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </div>
    );
}
export default MapUI;