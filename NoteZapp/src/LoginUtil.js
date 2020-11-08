import React from 'react'
import Login from 'pages/Login';
import { useStateValue } from 'StateProvider';
import MainComponent from './MainComponent'
function LoginUtil() {
    const [{user} , dispatch] = useStateValue();
    return !user ?  <Login/> : <MainComponent user ={user} />
}

export default LoginUtil
