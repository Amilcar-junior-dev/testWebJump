import React from 'react';
import { Box } from '../../../Atoms/Box';
import { Text } from '../../../Atoms/Text'
import { Image } from '../../../Atoms/Image';
import { PropsPokeCard } from './Models';
import { BoxTouch } from '../../../Atoms/Box';

const PokeCard: React.FC<PropsPokeCard> = ({
    name,
    power,
    type,
    color,
    image,
    onPress,
}) => {
   
    return (
        <BoxTouch onPress={ onPress }
        width='40%'
        height='150px'
        marginBottom='10px'
        marginRight='10px'
        borderRadiusTopLeft='10px'
        borderRadiusTopRight='10px'
        borderRadiusBottomLeft='10px'
        borderRadiusBottomRight='10px'>
            <Box 
                backgroundColor={color}
                pd={10}
                width='100%'
                height='195px'
                marginBottom='10px'
                marginRight='10px'
                alignItems='center'
                borderRadiusTopLeft='10px'
                borderRadiusTopRight='10px'
                borderRadiusBottomLeft='10px'
                borderRadiusBottomRight='10px'>
                <Box
                        width='90%'
                        height='120px'
                        backgroundColor='#ffffff40'
                        borderRadiusBottomLeft='100px'
                        borderRadiusBottomRight='100px'
                        borderRadiusTopLeft='100px'
                        borderRadiusTopRight='100px'
                        alignItems='center'
                        justifyContent='center'>
                          
                        <Image source={{uri: image}}
                            style={{
                                width: 70,
                                height: 80,
                                marginBottom: 4
                            }} />
                </Box>

                <Box
                     justifyContent='center'
                     alignItems='center'>
                     <Text
                        color='#fff'
                        fSize={20}>
                        {name}
                     </Text>
                </Box>
                
                <Box
                        width='100%'
                        flexDirections='row'
                        justifyContent='space-between'
                        alignItems='flex-end'
                        height='25px'>
                        <Box
                            backgroundColor='#FFFFFF30'
                            width='65px'
                            alignItems='center'
                            justifyContent='center'
                            marginTop='12px'
                            height='20px'
                            borderRadiusTopLeft='10px'
                            borderRadiusTopRight='10px'
                            borderRadiusBottomLeft='10px'
                            borderRadiusBottomRight='10px' >
                            <Text 
                                fSize={15}
                                color='#fff'>
                                {type}
                            </Text>
                        </Box>
                        <Box
                            backgroundColor='#FFFFFF30'
                            width='65px'
                            alignItems='center'
                            justifyContent='center'
                            marginTop='12px'
                            height='20px'
                            borderRadiusTopLeft='10px'
                            borderRadiusTopRight='10px'
                            borderRadiusBottomLeft='10px'
                            borderRadiusBottomRight='10px' >
                            <Text 
                                fSize={15}
                                color='#fff'>
                                {power}
                            </Text>
                        </Box>

                </Box>
                  
            </Box>
        </BoxTouch>
    )
}
export default PokeCard;