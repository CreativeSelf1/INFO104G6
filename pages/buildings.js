import {
    SimpleGrid,
    Box

} from '@chakra-ui/react'

const Buildings = () => {
    return (
        <SimpleGrid columns={3} spacing={6} spacingY="70px" justifyItems="center" paddingTop="100px" paddingBottom="50px">
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
            <Box bg='black' boxSize='250px'></Box>
        </SimpleGrid>

    )
}

export default Buildings