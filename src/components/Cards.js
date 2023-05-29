import React from "react";
import { Box, Input, Text, Image } from "@chakra-ui/react";

function Cards(){
    return(
        <Box>
            <Text fontSize={32} textAlign='left' mt={29} ml={27} fontWeight='bold'>Card Color Picker</Text>
            <Box display="flex" alignItems="center" justifyContent="space-between" h="132px" w="1250px" m='3% auto' >
                <Box w="100px" h="100px" bg="#2EC4B6" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#0A1128" borderRadius="12px 0"></Box>
                <Box w="132px" h="132px" bg="#FF0000" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#CCFF66" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#605856" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#5D2E8C" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#899878" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#FED18C" borderRadius="12px 0"></Box>
                <Box w="100px" h="100px" bg="#DB7F8E" borderRadius="12px 0"></Box>
            </Box>
            <Box display='flex'>
                <Box as="div">
                    <Box w='300px' h='400px'  borderRadius='16px 0'>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src='./images/profile.png'
                            alt='Dan Abramov'
                        />
                    </Box>
                </Box>
                <Box as="div">
                    <Text>Design my Card</Text>
                    <Text>Hey there User! Want to build your personalised card? Choose a colour from the palette above and fill your name</Text>
                    <Text>Your selected colour is #ff0000</Text>
                    <Text>Name</Text>
                    <Input size='md' w='328px' bgColor='#DDDDDD' placeholder="Jhon Doe" color='#000000'></Input>
                </Box>

            </Box>
        </Box>
    )
}

export default Cards;