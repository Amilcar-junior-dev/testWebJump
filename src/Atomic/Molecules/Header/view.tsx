import React from 'react';
import { BoxHeader, Box } from '../../Atoms/Box'
import { Text } from '../../Atoms/Text';
import { Image } from '../../Atoms/Image'
import IconLeftArrow from 'react-native-vector-icons/MaterialIcons';

import { PropsHeader } from './Models';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Header: React.FC<PropsHeader> = ({
    user,
    message,
    navigation = useNavigation()
}) => {
    // const navigation = useNavigation()
    return (

        <BoxHeader
            heigth='100px'
            marginBottom='50px'
            borderRadiusBottomLeft='25px'
            borderRadiusBottomRight='25px'
            alignItems='center'
            flexDirections='row'
            backgroundColor='#21386E'>
                <Box
                height='40px'
                alignItems='center'
                width='15%'
                >
                    <TouchableOpacity onPress={() => navigation.navigate('PageInitial')}>
                        <IconLeftArrow name='arrow-back' size={40} color='#ffffff' />
                    </TouchableOpacity>


                </Box>
                <Box
                height='80px'
                width='70%'
                alignItems='center'
                justifyContent='center'
                >

                    <Image  source={require('../../../Assets/po.png')}   
                    style={{
                        width: 180,
                        height: 180

                    }}/>
                </Box>
           
        </BoxHeader>
    )
}

export default Header;

