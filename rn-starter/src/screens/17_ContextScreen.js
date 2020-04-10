import React from 'react';
import ContextChild from './17_ContextChild';
import {NameProvider} from './17_Context';
const ContextScreen = ()=>{
  return (
    <NameProvider>
      <ContextChild/>
    </NameProvider>

  );
}

export default ContextScreen;