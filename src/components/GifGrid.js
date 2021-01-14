import React/*,*{useEffect, useState}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:imagen, loading} = useFetchGifs(category);

    //const [imagen, setImagen] = useState([]);

    /*
    useEffect(() => {
        getGifs(category)
            .then(imgs => setImagen(imgs));
    }, [category])
    */

    return (
        <>
            <h3 className = "animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className = "animate__animated animate__flash">Loading...</p>}
            <div className = "cardGrid">
            {   
                imagen.map(img => ( 
                    <GifGridItem
                    key = {img.id}
                    {...img} />
                ))
            }
            </div>
        </>
    )
}
