// import React, { useState ,useEffect } from 'react';
// import { GifGridItem } from './GifGridItem';
// import {getGifs} from  '../helpers/GetGifs';

import { React } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from  './GifGridItem';

export const GifGrid=({category})=>{

    const {data:imagnes,loading}=useFetchGifs(category);
    //console.log(loading);
    

    return( 
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>  

            {loading && <p className="animate__animated animate__flash">Cargando ...</p> }

            <div  className="card-grid">
            
                {
                    imagnes.map(img=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
        
            </div>
        </>
    
    )
}