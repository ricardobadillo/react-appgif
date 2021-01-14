// SNIPPETS: RAFC.

import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // NO: const categories = ['One Punch', 'Naruto', 'Dragon Ball', 'Death Note', 'Monster', 'Fullmetal Alchemist'];
    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        // LE CAE ENCIMA A TODO LO QUE HAY EN CATEGORIES.
        setCategories([...categories, 'Vinland Saga']);
        //setCategories(cat => [...cat], 'Code Geass');
    }
    */

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                    <GifGrid 
                    key = {category}
                    category = {category} />))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;