import {
    SimpleGrid,
    Box,
    Image
} from '@chakra-ui/react';


/* https://diario.uach.cl/wp-content/uploads/2013/01/2553900.jpg */
const Buildings = () => {
    return (
        <body>
            <div class="Container_grid"> 
                <SimpleGrid columns={3} spacing={4} spacingY="60px" justifyItems="center" paddingTop="100px" paddingBottom="50px">
                    <div class="card">
                        <Box boxSize='250px'>
                            <Image
                                boxSize='250px'      
                                height='250px'              
                                objectFit='cover'
                                objectPosition="center"
                                src='https://diario.uach.cl/wp-content/uploads/2010/07/1825300.jpg'                  
                            />
                        </Box>
                        <div class="card-content">
                            <div class="card-info"> 
                                <h2> Edifico 10000 (Informatica)</h2>
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
                                src='https://diario.uach.cl/wp-content/uploads/2013/01/2553900.jpg'                  
                            />
                        </Box>
                        <div class="card-content">
                            <div class="card-info"> 
                                <h2> Edifico 7000 </h2>
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
        </body>
    )
}

export default Buildings