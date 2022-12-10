import {
    SimpleGrid,
    Box,
    Image,
    Input,
    defineStyleConfig,
    Icon
} from '@chakra-ui/react';
import {
    RiSearch2Line,
    RiSearch2Fill
} from 'react-icons/ri';

import Layout from '../components/layoutmenu';
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
        <Layout>
            <div class="Container_grid">
                <Head>
                    <title> Edificios </title>
                </Head>

                <main>
                    <SimpleGrid columns={3} spacing={4} spacingY="60px" justifyItems="center" paddingTop="100px" paddingBottom="50px">
                        {data.map((item, index) => (
                            <BuildingsList key={index} item={item} />
                        ))}
                    </SimpleGrid>
                </main>
                <div class="Scontainer">
                    <input type="text" placeholder='Search..' />
                    <div class="Sbuton">
                        <Icon class="Sicon" as={RiSearch2Line} />
                        <Icon class="S2icon" as={RiSearch2Fill} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
