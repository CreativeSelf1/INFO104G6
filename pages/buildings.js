import {
    SimpleGrid,
    Text,
    Box,
    Image,
    Input,
    defineStyleConfig,
    Icon,
    Heading
} from '@chakra-ui/react';
import {
    RiSearch2Line,
    RiSearch2Fill
} from 'react-icons/ri';

import Layout from '../components/layoutmenu';
import Layfooter from '../components/layoutfooter'
import BuildingsList from '../components/buildingList'
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

export default function buildings({ data }) {
    return (
        <div>
            <Layout></Layout>
            <div class="Container_grid">
                <Head>
                    <title> Edificios </title>
                </Head>

                <main>
                {/* <Text paddingTop="30px" align="center" fontSize='4xl'>Campus Miraflores</Text> */}
                    <SimpleGrid columns={3} spacing={4} spacingY="60px" justifyItems="center" paddingTop="100px" paddingBottom="50px">
                        {data.map((item, index) => (
                            <BuildingsList key={index} item={item} />
                        ))}
                    </SimpleGrid>
                </main>
            </div>
            <Layfooter></Layfooter>
        </div>

    )
}
