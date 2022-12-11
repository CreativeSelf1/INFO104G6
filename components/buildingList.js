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

import Head from 'next/head';

const buildingsList = ({ item }) => {
    return (
        <div class="Container_grid">
            <div >
                <div class="card">
                    <Box boxSize='250px'>
                        <Image
                            boxSize='250px'
                            height='250px'
                            objectFit='cover'
                            objectPosition="center"
                            src={item.imagen}
                        />
                    </Box>
                    <div class="card-content">
                        <div class="card-info">
                            <h2> {item.title}</h2>
                            <a href='#'> Ver Mas </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default buildingsList