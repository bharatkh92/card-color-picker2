import React from "react";
import { Box, Input, Text, Image } from "@chakra-ui/react";
import profile from '../images/profile.png';

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
            <Box display='flex'  m='10% 0 200px 339px' >
                <Box as="div" >
                    <Box display='flex' flexDir='column' justifyContent='space-between' w='300px' h='400px'  borderRadius='16px 0' bgColor="#FF0000" alignItems='center'>
                        <Image borderRadius='full' mt='31px' boxSize='150px' src={profile} alt='Dan Abramov'/>
                        <Text color='white' m='10%' fontSize='34px'>Jhon Doe</Text>
                    </Box>
                </Box>
                <Box as="div" w='329px' textAlign='left' ml='121px'>
                    <Text fontSize='24px' fontWeight='bold'>Design my Card</Text>
                    <Text fontSize='12px' mt='13px'>Hey there User! Want to build your personalised card? Choose a colour from the palette above and fill your name</Text>
                    <Text fontSize='16px' mt='35px'>Your selected colour is <b>#ff0000</b></Text>
                    <Text fontSize='20px' mt='24px' fontWeight='bold'>Name</Text>
                    <Input size='md' mt='25px' w='328px' bgColor='#DDDDDD' placeholder="Jhon Doe" color='#000000'></Input>
                </Box>

            </Box>
        </Box>
    )
}

export default Cards;