import React from 'react';

export const authContext = React.createContext({
    authData:{
        signedIn: false,
        user: {},
    },
    setAuthData:()=>{}
})

export default authContext;