import {
    Image,
    Box,
    Button,
    Center,
} from '@chakra-ui/react';
import React from 'react'
import LayoutMenu from '../components/layoutmenu'
import LayoutFooter from '../components/layoutfooter'


const Mapa = () => {

    // const[value,setValue] = React.useState(false); la usare luego
    
    return (
        <div className="Map">
            <LayoutMenu></LayoutMenu>
                <Center marginTop='100px' marginLeft='-300px' marginBottom='100px'>
                    <Box className='containerI'>
                        <Image src='\data\image\MAP.jpg' alt='mapa' borderRadius='2xl' align=''/>
                            <Button className='btn b100' size='xs'></Button>
                            <Button className='btn b200' size='xs'></Button>
                            <Button className='btn b500' size='xs'></Button>
                            <Button className='btn b800' size='xs'></Button>
                            <Button className='btn b1k' size='sm'></Button>
                            <Button className='btn b2k' size='md'></Button>
                            <Button className='btn b3k' size='md'></Button>
                            <Button className='btn b4k' size='sm'></Button>
                            <Button className='btn b5k' size='xs'></Button>
                            <Button className='btn b6k' size='lg'></Button>
                            <Button className='btn b7k' size='xs'></Button>
                            <Button className='btn b8k' size='md'></Button>
                            <Button className='btn b9k' size='sm'></Button>
                            <Button className='btn b10k' size='xs'></Button>
                            <Button className='btn b11k' size='xs'></Button>
                            <Button className='btn b13k' size='xs'></Button>
                            <Button className='btn b14k' size='sm'></Button>
                            <Button className='btn bGim' size='sm'></Button>
                            <Button className='btn bKine' size='xs'></Button>
                            <Button className='btn bCasino' size='xs'></Button>
                            <Button className='btn bCabañas' size='lg'></Button>
                            <Button className='btn bEntrada' size='xs'></Button>
                            <Button className='btn bAcustica' size='xs'></Button>
                            <Button className='btn bBiblioteca' size='xs'></Button>

                            
                    </Box>
                </Center>
            <LayoutFooter></LayoutFooter>
        </div>
    )
}

export default Mapa