import { Button, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";
import Event from './contacts'
const Cart = () => {
    return (
        <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            backgroundColor="#896969"
        >

            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Contacts</Heading>
                <Text>Contacts we have on hand</Text>
            </VStack >

            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}></GridItem>

            </SimpleGrid>

        </VStack>
    );
}


export default Cart;