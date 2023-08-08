import React, { useEffect, useState, useContext } from 'react';
import axios, { AxiosResponse } from "axios";
import { useMovementsContext } from '../../../context/SuperAppContext';

const EarnedMovements = () => {
    const { state, dispatch } = useMovementsContext();

    const controller = new AbortController();

    const [movements, setMovements] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [moreData, setMoreData] = useState(true);

    const getMovements = () => {
        controller.abort();
        setLoading(true);
        setTimeout(() => {
            axios
                .get(`http://localhost:3001/history/${page}`)
                .then((response: AxiosResponse) => {
                    const earnedMovements = response.data.data.flatMap((period: any) =>
                        period.data.flatMap((item: any) =>
                            item.data.filter((movement: any) => movement.operation === "earned")
                        )
                    );

                    setMovements([...movements, ...earnedMovements]);
                    setPage(page + 1);
                })
                .catch((err) => {
                    console.log(err);
                    setMoreData(false);
                })
                .finally(() => setLoading(false));
        }, 2000);
    };

    useEffect(() => {
        getMovements();

        return () => controller.abort();
    }, []);

    const handleCategorySelect = (category: string) => {
        dispatch({ type: 'SELECT_CATEGORY', payload: category === 'Mostrar todo' ? '' : category });
    };

    return { movements, loading, moreData, getMovements, handleCategorySelect };
}

export default EarnedMovements;
