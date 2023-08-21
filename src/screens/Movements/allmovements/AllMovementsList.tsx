import React from 'react'
import { View } from 'react-native';
import { style } from './allmovents.style';
import useMovements from '../../../hooks/useMovements';
import MovementsList from '../movementslist/MovementsList';

const AllMovementsList = () => {

    const { movements, getMovements, loading, moreData } = useMovements('history')

    return (
        <View style={style.container}>
            <MovementsList
                movements={movements}
                getData={getMovements}
                loading={loading}
                moreData={moreData}
            />
        </View>
    );
}

export default AllMovementsList;