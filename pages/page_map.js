import MapList from '../components/mapList'
import { Box, Flex, Image } from '@chakra-ui/react';
import Layout from '../components/layoutmenu'
import LayFooter from '../components/layoutfooter'
import Head from 'next/head';

export async function getServerSideProps(context) {
    const res = await fetch("http://localhost:3000/data/inf.json");
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
    };
}

export default function page_map({ data }) {
    return (
        <div>
            <Layout></Layout>
            <div class="container2">
                <div id='map'>
                    <Head>
                        <title> Mapa </title>
                    </Head>
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
                    <h1>Edificios</h1>
                    {data.map((item, index) => (
                        <MapList key={index} item={item} />
                    ))}
                </div>
            </div>
            <LayFooter></LayFooter>
        </div>
    );
}
