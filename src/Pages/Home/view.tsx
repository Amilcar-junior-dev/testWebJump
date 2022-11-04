import React, { useContext } from 'react';
import { FlatList, Dimensions, ActivityIndicator, Platform } from 'react-native';
import normalize from "react-native-normalize"

import { Box } from '../../Atomic/Atoms/Box'
import { Text } from '../../Atomic/Atoms/Text';
import PokeCard from '../../Atomic/Molecules/Cards/PokeCard'
import Header from '../../Atomic/Molecules/Header';
import Footer from '../../Atomic/Molecules/Footer';
import { PropsHome } from './Models';
import { Context } from '../../Context';
import { useNavigation } from '@react-navigation/native';
import IconSearch from 'react-native-vector-icons/MaterialIcons';
import IconArrow from 'react-native-vector-icons/FontAwesome';


const Home: React.FC<PropsHome> = ({
    title
}) => {
    const {
        pokemonValue,
        SelectedPokemon,
        getPokemon,
        loading,
    } = useContext(Context);
    
    const { height } = Dimensions.get("window")
  
    const navigation = useNavigation();

    return (
        <>
        
          
            <FlatList
            
                data={pokemonValue}
                ListHeaderComponent={
                    <>
                        <Header />
                        <Box
                            pd={10}
                            marginTop="10px"
                            alignItems='center'
                            height='80px'>
                            <Text
                                fWeight='bold'
                                color='#21386E'
                                fSize={25}>
                                {title}
                            </Text>
                        </Box>
                        <Box
                            height='40px'
                            alignItems='center'
                            justifyContent='center'>
                             <Box
                                backgroundColor='#00008020'
                                height='50px'
                                width='80%'
                                pd={10}
                                borderRadiusBottomRight='30px'
                                borderRadiusTopRight='30px' 
                                borderRadiusTopLeft='30px'
                                borderRadiusBottomLeft='30px'
                                flexDirections='row'>
                                    <Box width='10%'>
                                         <IconSearch name='search' size={30} color='#000080' />
                                    </Box>
                                    <Box 
                                     width='90%'
                                     alignItems='center'
                                     flexDirections='row'
                                     justifyContent='space-between'>
                                        <Text 
                                            color='#3663AD'
                                            fSize={15}> 
                                            Search Pokémon
                                        </Text>
                                        <IconArrow name='arrow-circle-right' size={30} color='#000080' />
                                    </Box>
                             </Box>
                        </Box>
                    </>
                }
                ListFooterComponent={
                    <>
                        <Footer />
                        <ActivityIndicator animating={loading} />
                    </>
                }
                showsVerticalScrollIndicator={false}
                onEndReached={getPokemon}
                onEndReachedThreshold={0.03}
                numColumns={2}
                style={{
                    marginBottom: normalize(20)
                }}
                columnWrapperStyle={{
                    width: '100%',
                    height: normalize(height / 4.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: Platform.OS === 'ios' ? 16 : 30
                }}
                renderItem={({ item, index }) => (
                    <PokeCard
                        key={index}
                        name={item.name}
                        type={item.types[0].type.name}
                        power={item.abilities[0].ability.name}
                        color={index.toString()}
                        image={item.sprites.other.home.front_default}
                        onPress={() => {
                            SelectedPokemon(index)
                            navigation.navigate('Details', {id:index})
                        }} />
                )}>
            </FlatList >
        </>
    )
}

export default Home;