import React, { useContext } from 'react';
import ViewMeasurements from './view'
import { PropsDescription } from './Models'
import { Context } from '../../../Context';
import { useRoute } from '@react-navigation/native';

const Measurements: React.FC<PropsDescription> = ({
    children
}) => {
    const {pokemon}=useContext(Context);
    const {params} = useRoute()

    const randomColor = (): string => {
        if (parseInt(params.id) % 4 == 0) {
            return "#48D0B0"
        }
        if (parseInt(params.id) % 4 == 1) {
            return "#FB6C6C"
        }
        if (parseInt(params.id) % 4 == 2) {
            return "#77BDFE"
        }

        return "#FFCB05"
    }
    return (
        <ViewMeasurements
            weight={ pokemon.weight}
            height={pokemon.height}
            power={pokemon.moves[0].move.name}
            color={randomColor()}
        >
            {children}
        </ViewMeasurements>
    )
}
export default Measurements;