import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Context from './17_Context';
import ContextGrandchild from './17_ContextGrandchild';

const ContextChild = ()=>{
    const {name} = useContext(Context);
    return (
    <View>
        <Text>{name}</Text>
        <ContextGrandchild/>
    </View>
    );
}

export default ContextChild;