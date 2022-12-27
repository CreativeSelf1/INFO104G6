import MapList from '../components/mapList'
import { Box, Flex, Image, Center, Button } from '@chakra-ui/react';
import Layout from '../components/layoutmenu'
import LayFooter from '../components/layoutfooter'
import Head from 'next/head';
import inf from '../public/data/inf.json'
import ButtonList from '../components/buttonList'


export default function page_map() {

    return (
        <div class="page_map">
            <Layout></Layout>
            <Head>
                <title> Mapa </title>
            </Head>
            <div class="containerI2">
                <div id='map'>
                    <Flex>
                        <Box paddingTop="100px" paddingLeft="90px" paddingBottom="200px">
                            <Image src="https://i.imgur.com/C0NypXU.jpg"
                                height={700} //
                                width={900}
                            />
                        </Box>
                    </Flex>
                </div>
                <div id="list">
                    <Center bg=" linear-gradient(90deg, rgb(31, 23, 170) 0%, rgba(195,196,238,1) 0%, rgba(140,180,136,1) 35%, rgba(137,212,227,1) 100%)"
                        border="1px"
                        alignContent="center"
                        borderRadius="10px"
                        borderColor="green"
                        fontFamily="arial">
                        INFORMACIÓN RÁPIDA DE EDIFICIOS
                    </Center>
                    <MapList></MapList>
                </div>
            </div>
            <div class="containerI">
                <div id="buttons">
                    {inf.map((item, index) => (
                        <ButtonList key={index} item={item} />

                    ))
                    }
                </div>
            </div>
            <LayFooter></LayFooter>
        </div>
    );
}
