import { Button, ButtonGroup, Center, Flex, Heading, IconButton, Box, Image, Link, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";

import { EmailIcon ,} from '@chakra-ui/icons'
import { FiGithub } from "react-icons/Fi";
const menuFooter = () => {

    return (
        <Flex id="menuFooter">
            <ButtonGroup id="FooterButton" gap="20" paddingLeft="400px">
                    <Link href="https://chakra-ui.com/" isExternal>
                        <Button background="none" >About</Button>
                    </Link>
                    <Link>
                        <Button background="none" >Contacto</Button>
                    </Link>
                    <Button background="none"> Repositorio Git</Button>
            </ButtonGroup>
        </Flex>
    )
}
export default menuFooter