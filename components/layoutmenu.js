import { Button, ButtonGroup, Divider, Flex, Heading, IconButton, Box, Image, Link, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";

import { EmailIcon ,} from '@chakra-ui/icons'
import { FiGithub } from "react-icons/fi";

const BarraMenu = () => {

    return (
        <Flex id="MenuBarra">
            <Flex paddingLeft="80px" pt="10px">
                <Box boxSize='150px' marginLeft="px">
                    <Image src='https://www.uach.cl/uach/_file/logo_uach-614a369aa9528.png' blockSize="76%" paddingBottom="25px" />
                </Box>
            </Flex>

            <Flex direction="row" padding="30px" paddingLeft="400px">
                <ButtonGroup gap="20">
                    <Link href="/page_map">
                        <Button background="none" >Salas</Button>
                    </Link>
                    <Link href='/buildings'>
                        <Button background="none">Edificios</Button>
                    </Link>
                    <Link href='/mapa'>
                        <Button background="none">Mapa</Button>
                    </Link>
                </ButtonGroup>
            </Flex>


            <Link href="https://github.com/CreativeSelf1/INFO104G6" isExternal marginTop="30px" marginLeft="33px">
                <IconButton  background="none" icon={<FiGithub />}></IconButton>
            </Link>
        </Flex>
    )
}
export default BarraMenu