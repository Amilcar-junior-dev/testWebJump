import React, { useContext } from 'react';
import { Box } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsDescription } from './Models';

import IcoWeight from 'react-native-vector-icons/FontAwesome5';
import IcoHeight from 'react-native-vector-icons/MaterialIcons';
import { Context } from '../../../Context';

const Measurements: React.FC<PropsDescription> = ({
    weight,
    height,
    power,
    color,
}) => {
    const {pokemon}=useContext(Context);
    return (
        <Box
            height='60px'
            flexDirections='row'
            justifyContent='space-between'>
            <Box
                alignItems='center'
                width='33%'
                height='100%'>
                <Text  
                    fSize={14} 
                    color='#395BA7'>
                    Weight:
                </Text>
                <Box
                    flexDirections='row'
                    height='70%'
                    alignItems='center'
                    justifyContent='center'>
                    <Box
                        backgroundColor={color}
                        borderRadiusBottomRight='20px'
                        borderRadiusTopRight='20px' 
                        borderRadiusTopLeft='20px'
                        borderRadiusBottomLeft='20px'
                        height='80%'
                        width='80%'
                        alignItems='center'
                        justifyContent='center'>
                        <Text fSize={15}
                            fWeight='bold'>
                                {weight} kg
                       
                        </Text>
                    </Box>
                </Box>
                
            </Box>

            <Box
                alignItems='center'
                width='33%'
                height='100%'>
                <Text 
                    fSize={14}
                    color='#395BA7'>
                    Height:
                </Text>
                <Box
                    flexDirections='row'
                    height='70%'
                    alignItems='center'
                    justifyContent='center'>
                    <Box
                       backgroundColor={color}
                       borderRadiusBottomRight='20px'
                       borderRadiusTopRight='20px' 
                       borderRadiusTopLeft='20px'
                       borderRadiusBottomLeft='20px'
                       height='80%'
                       width='80%'
                       alignItems='center'
                       justifyContent='center'>
                        <Text 
                            fSize={15}
                            fWeight='bold'>
                       {height} m
                        </Text>
                    </Box>
                </Box>
                
            </Box>

            <Box
                alignItems='center'
                width='33%'
                height='100%'>
                <Text 
                    fSize={14}
                    color='#395BA7'>
                 Major move 
                </Text>
                <Box
                    flexDirections='row'
                    height='70%'
                    alignItems='center'
                    justifyContent='center'>
                    <Box
                       backgroundColor={color}
                       borderRadiusBottomRight='20px'
                       borderRadiusTopRight='20px' 
                       borderRadiusTopLeft='20px'
                       borderRadiusBottomLeft='20px'
                       height='80%'
                       width='80%'
                       alignItems='center'
                       justifyContent='center'>
                        <Text
                            fSize={15}
                            fWeight='bold'>
                            {power}
                        </Text>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}
export default Measurements;