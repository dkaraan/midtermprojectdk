import {
    Flex,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Text,
    IconButton,
    Divider,
    Container,
    VStack,
    SimpleGrid,
    GridItem,
    FormLabel,
    FormControl,
    useBreakpointValue,
} from "@chakra-ui/react";

import { Event } from './Event'
const Details = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1 });
    return (
        <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg="#698989"
        >
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Your Details</Heading>
                <Text>Form below</Text>
            </VStack >

            {/*column gap and rowGap are in increments of 4px*/}
            {/*originally was cart.js*/}
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">

                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel color="#171923">First Name</FormLabel>
                        <Input color="#424242"
                            border="black"
                            border-width="thick"
                            backgroundColor="#050808"
                            placeholder="Musa"
                            type="text"
                            value={inputFirstName} />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel color="#171923">Last Name</FormLabel>
                        <Input color="#424242"
                            border="black"
                            border-width="thick"
                            backgroundColor="#050808"
                            placeholder="Goes Buck"
                            type="text"
                            value={inputLastName} />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel color="#171923">Email</FormLabel>
                        <Input color="#424242"
                            border="black"
                            border-width="thick"
                            backgroundColor="#050808"
                            placeholder="MusaCanKrump@freemusa.com"
                            type="text"
                            value={inputEmail} />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel color="#171923">Phone</FormLabel>
                        <Input color="#424242"
                            border="black"
                            border-width="thick"
                            backgroundColor="#050808"
                            placeholder="555-555-5555"
                            type="text"
                            value={inputPhone} />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <Button width="full"
                        size="lg"
                        backgroundColor="#424242"
                        color="white"
                        ml={2}
                        onClick={() => sendData()}
                    >Finish</Button>
                </GridItem>

            </SimpleGrid>
        </VStack>
    );
};

export default Details;