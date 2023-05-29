import React from "react";
import { Box, Input, Text, Image } from "@chakra-ui/react";
import profile from '../images/profile.png';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#FF0000'
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(value){
        this.setState({
            color: value
        })
    }
    render() {
        return (
            <Box>
                <Text fontSize={32} textAlign='left' mt={29} ml={27} fontWeight='bold'>Card Color Picker</Text>
                <Box display="flex" alignItems="center" justifyContent="space-between" h="132px" w="1250px" m='3% auto' >
                    <Box w="100px" h="100px" id="#2EC4B6" bg="#2EC4B6" borderRadius="12px 0" onClick={this.handleClick('#2EC4B6')}></Box>
                    <Box w="100px" h="100px" id="#0A1128" bg="#0A1128" borderRadius="12px 0" onClick={this.handleClick('#0A1128')}></Box>
                    <Box w="132px" h="132px" id="#FF0000" bg="#FF0000" borderRadius="12px 0" onClick={this.handleClick('#FF0000')}></Box>
                    <Box w="100px" h="100px" id="#CCFF66" bg="#CCFF66" borderRadius="12px 0" onClick={this.handleClick('#CCFF66')}></Box>
                    <Box w="100px" h="100px" id="#605856" bg="#605856" borderRadius="12px 0" onClick={this.handleClick('#605856')}></Box>
                    <Box w="100px" h="100px" id="#5D2E8C" bg="#5D2E8C" borderRadius="12px 0" onClick={this.handleClick('#5D2E8C')}></Box>
                    <Box w="100px" h="100px" id="#899878" bg="#899878" borderRadius="12px 0" onClick={this.handleClick('#899878')}></Box>
                    <Box w="100px" h="100px" id="#FED18C" bg="#FED18C" borderRadius="12px 0" onClick={this.handleClick('#FED18C')}></Box>
                    <Box w="100px" h="100px" id="#DB7F8E" bg="#DB7F8E" borderRadius="12px 0" onClick={this.handleClick('#DB7F8E')}></Box>
                </Box>
                <Box display='flex' m='10% 0 200px 339px' >
                    <Box as="div" >
                        <Box id="output" display='flex' flexDir='column' justifyContent='space-between' w='300px' h='400px' borderRadius='16px 0' bgColor={this.state.color} alignItems='center'>
                            <Image borderRadius='full' mt='31px' boxSize='150px' src={profile} alt='Dan Abramov' />
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
}

export default Cards;