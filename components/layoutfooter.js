import { Button, ButtonGroup, Center, Flex, Heading, IconButton, Box, Image, Link, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { EmailIcon, } from '@chakra-ui/icons'
import { FiGithub } from "react-icons/fi";
const menuFooter = () => {

    return (
        <Flex id="menuFooter">
            <ButtonGroup id="FooterButton" gap="20" paddingLeft="290px">
                <Link href="https://chakra-ui.com/" isExternal>
                    <Button background="none" >About</Button>
                </Link>
                <Link href="https://www.uach.cl/sedes-y-campus/informacion-general/campus-miraflores" isExternal>
                    <Button background="none">UACh</Button>
                </Link>
                <Link href="https://github.com/CreativeSelf1/INFO104G6" isExternal>
                    <Button background="none"> Repositorio Git</Button>
                </Link>
            </ButtonGroup>
        </Flex>
    )
}
export default menuFooter