import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItems from './GifGridsItems';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);


    useEffect(() =>{
        getGifs(category)
            .then(setImages);
    },[category]);

    
    

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(({id,title,url}) => (
                    <GifGridItems
                        key={id}
                        title={title}
                        url={url}
                    />
                ))}
                
            </div>
        </>
    );
}

export default GifGrid;