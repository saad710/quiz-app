import React, { createContext, useState } from 'react';


export const TotalCountContext = createContext()

const TotalCountProvider = (props) => {
    const [totalItem,setTotalItem] = useState([])
    const [marks,setMarks] = useState('')
    const { children } = props
    return (
        <TotalCountContext.Provider value={{ totalItem,setTotalItem,marks,setMarks }}>
            { children }
        </TotalCountContext.Provider>
    );
};

export default TotalCountProvider;