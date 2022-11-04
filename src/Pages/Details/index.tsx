import React, { useContext } from 'react';
import { useRoute} from '@react-navigation/native';

import ViewDetails from './view';


import { PropsDetails } from './Models';

const Details: React.FC<PropsDetails> = ({
}) => {
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
        <ViewDetails 
        color={randomColor()}
        />
    )
}
export default Details;