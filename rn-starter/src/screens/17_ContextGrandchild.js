import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Context from './17_Context';

const ContextGrandChild = ()=>{
    const {name} = useContext(Context);
    return (
    <View><Text>it is a grandchild {name}</Text></View>
    );
}

export default ContextGrandChild;