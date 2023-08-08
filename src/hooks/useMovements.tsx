import React, { useEffect, useState, useContext } from 'react';
import axios, { AxiosResponse } from "axios";
import { useMovementsContext } from '../context/SuperAppContext';



const useMovements = () => {
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
                    console.log(response.data.data);
                    setMovements([...movements, ...response.data.data]);
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

export default useMovements;
