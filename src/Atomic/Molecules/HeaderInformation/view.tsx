import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, BoxHeader } from '../../Atoms/Box';
import { Text } from '../../Atoms/Text';
import { PropsHeaderInformationVIew} from './Models';

import IconLeftArrow from 'react-native-vector-icons/MaterialIcons';
import IconHeart from 'react-native-vector-icons/AntDesign';

const HeaderInformation: React.FC<PropsHeaderInformationVIew> = ({
    title,
    type,
    power,
}) => {
    const navigation = useNavigation();

    return (
                <Box
                
                    height='280px'
                    pd={10} >
                    
                    <Box 
                        height='80px'>
                        <Text
                            fSize={50}
                            color='#fff'>
                            {title}
                        </Text>
                    </Box>

                    <Box
                        height='40px'
                        flexDirections='row'
                        alignItems='center'>
                        <Box
                            height='30px'
                            width='100px'
                            marginRight='10px'
                            alignItems='center'
                            justifyContent='center'
                            borderRadiusTopLeft='20px'
                            borderRadiusTopRight='20px'
                            borderRadiusBottomLeft='20px'
                            borderRadiusBottomRight='20px'
                            backgroundColor='#d8faf354'>
                            <Text fSize={12} color='#fff' fWeight='bold'>
                                {type}
                            </Text>
                        </Box>
                        <Box
                            height='30px'
                            width='100px'
                            alignItems='center'
                            justifyContent='center'
                            borderRadiusTopLeft='20px'
                            borderRadiusTopRight='20px'
                            borderRadiusBottomLeft='20px'
                            borderRadiusBottomRight='20px'
                            backgroundColor='#d8faf354'>
                            <Text fSize={12} color='#fff' fWeight='bold'>
                                {power}
                            </Text>
                        </Box>
                    </Box>
                </Box>
    )
}
export default HeaderInformation;