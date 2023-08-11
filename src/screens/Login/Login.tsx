import React, { useEffect } from "react";
import { View } from "react-native";
import { useMovementsContext } from "../../context/SuperAppContext";

const Login = () => {

    const { dispatch } = useMovementsContext()
//se manda a cambiar el isLogin para mandar al otro naviagtion 
    useEffect(() => {
        console.log('dispatched')
        dispatch({type:'SET_USER_LOGED', payload: false})
    }, [])

    return (<View></View>)
}

export default Login;