import MapList from '../components/mapList'
import { Box, Flex, } from '@chakra-ui/react';
import Image from "next/image";
import Layout from '../components/layoutmenu'
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

export default function MapUI2({ data }) {
    return (
        <Layout>
            <div>
            <Head>
                <title> Mapa </title>
            </Head>
                <Flex>
                    <Box paddingTop="100px" paddingLeft="90px" paddingBottom="200px">
                        <Image src="/images/MAP.png"
                            height={900} //
                            width={900}
                        />
                    </Box>
                </Flex>
                <div className="Map">
                    <MapList></MapList>
                </div>
            </div>
        </Layout>
    );
}
