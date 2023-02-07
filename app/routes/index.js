import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import MainStack from './stacks/mainStack';
import AuthStack from './stacks/authStack';

const RootStack = () => {
  const {user,authToken} = useSelector((state: any) => state.root.user);
  useEffect(()=>{
    console.log("user ====>>>>>",user);
    console.log("authToken ====>>>>>",authToken);
  },[]);
      return <>{ authToken ? <MainStack/> : <AuthStack/>}</>
};



export default RootStack;

