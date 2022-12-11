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
import LayoutMenu from '../components/layoutmenu'
import LayoutFooter from '../components/layoutfooter'

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
        <><LayoutMenu></LayoutMenu>
        <div class="Container_grid">
            <div class="Scontainer">
                <input type="text" placeholder='Search..' />
                <div class="Sbuton">
                    <Icon class="Sicon" as={RiSearch2Line} />
                    <Icon class="S2icon" as={RiSearch2Fill} />
                </div>
            </div>
            <SimpleGrid columns={3} spacing={4} spacingY="60px" justifyItems="center" paddingTop="100px" paddingBottom="50px">
                <div class="card">
                    <Box boxSize='250px'>
                        <Image
                            boxSize='250px'
                            height='250px'
                            objectFit='cover'
                            objectPosition="center"
                            src='https://diario.uach.cl/wp-content/uploads/2010/07/1825300.jpg' />
                    </Box>
                    <div class="card-content">
                        <div class="card-info">
                            <h2> Edificio 10000 (Informatica)</h2>
                            <a href='#'> Ver Mas </a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <Box boxSize='250px'>
                        <Image
                            boxSize='250px'
                            height='250px'
                            objectFit='cover'
                            objectPosition="center"
                            src='https://diario.uach.cl/wp-content/uploads/2013/01/2553900.jpg' />
                    </Box>
                    <div class="card-content">
                        <div class="card-info">
                            <h2> Edificio 9000 </h2>
                            <a href='#'> Ver Mas </a>
                        </div>
                    </div>
                </div>
                <Box className='card' boxSize='250px'></Box>
                <Box className='card' boxSize='250px'></Box>
                <Box className='card' boxSize='250px'></Box>
                <Box className='card' boxSize='250px'></Box>
                <Box className='card' boxSize='250px'></Box>
                <Box className='card' boxSize='250px'></Box>
                <Box className='card' boxSize='250px'></Box>
            </SimpleGrid>
        </div>
        <LayoutFooter></LayoutFooter></>
    )
}
