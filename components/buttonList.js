import { Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button, Box, Center } from '@chakra-ui/react'

const buttonList = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                className='btn' onClick={onOpen}
                // color={item.color}
                // border="4px solid" 
                size={item.ButtonCarac[0]}
                top={item.ButtonCarac[1]}
                left={item.ButtonCarac[2]}
            // // _hover={{background: item.color}}
            >
            </Button>

            <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent h="550px">
                    <DrawerHeader borderBottomWidth='1px'>{item.title}</DrawerHeader>
                    <DrawerBody marginLeft="20px">
                        <h2>{item.title}</h2><br></br>
                        <p>{item.id}</p><br></br>
                        <Box boxSize="sm" textAlign="justify">
                            <p>{item.informacion}</p><br></br>
                            <p>Salas</p><br></br>
                            {item.salas.map((item2, index) => (
                                <p>{item2}</p>
                            ))}
                        </Box>

                        <Center borderRadius="30px" w='520px' h='520px' marginLeft="500px" marginTop="-430px" bg={item.ButtonCarac[3]}>
                            <Image borderRadius="20px" boxSize="lg" src={item.imagen}></Image>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default buttonList;
