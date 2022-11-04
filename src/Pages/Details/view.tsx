import React from 'react';
import { ScrollView, View } from 'react-native';

import { BoxContainer, Box } from '../../Atomic/Atoms/Box';
import Description from '../../Atomic/Molecules/Description';
import Measurements from '../../Atomic/Molecules/Measurements';
import Pokemon from '../../Atomic/Molecules/Pokemon';
import HeaderInformation from '../../Atomic/Molecules/HeaderInformation';
import Caracteristics from '../../Atomic/Molecules/Characteristics';
import { PropsDetails } from './Models';
import Header from '../../Atomic/Molecules/Header/view';
import { useNavigation } from '@react-navigation/native';

const Details: React.FC<PropsDetails> = ({
    color,
}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
                <>
                    <Header />
                    <View style={{ flex: 1, padding: 10}}>
                        <Box 
                            backgroundColor={color}
                            borderRadiusTopLeft='20px'
                            borderRadiusTopRight='20px'
                            height='100%'>
                            <HeaderInformation />
                            <Box
                                height='100%'
                                backgroundColor='#ffffff'
                                borderRadiusTopLeft='15px'
                                borderRadiusTopRight='15px'>
                                <Pokemon />
                                <Description />
                                <Measurements />
                                <Caracteristics />
                            </Box>

                        </Box>
                    </View>
                </>
        </ScrollView>
    )
}
export default Details;

