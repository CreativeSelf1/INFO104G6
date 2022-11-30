import { Box, Flex } from "@chakra-ui/react";
import { Image, 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
        } from '@chakra-ui/react'


const MapUI = () => {
    return (
        <Flex>
            <Box >
                <Image src='https://www.acusticauach.cl/wp-content/uploads/2012/10/Campus_Miraflores.jpg'
                    paddingTop="70px"
                    paddingBottom="150px"
                    paddingLeft="70px"
                />
            </Box>
            <Box>
            <Box px="200px" py="100px"  border="1px " >
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Edificio 10000
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            aqui se muestran las Salas
                            del edicios
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Edificio 9000
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                aqui se muestran las Salas
                                del edicios
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Edificio 8000
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                aqui se muestran las Salas
                                del edicios
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Box>
            </Box>
        </Flex>
    );
}
export default MapUI;