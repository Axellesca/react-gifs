import React, { useState } from 'react'

export const useFetchGifs = () => {
    
    const [state, setstate] = useState({
        dat: [],
        loading: true
    });

    return state;
}
