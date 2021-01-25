import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['BTS']);

    // const handleAdd = () => {
    //     setCategories( ['RM', 'J-Hope', 'Suga', 'Jin'] );
    //     setCategories( cats => [...categories, 'Jin'] );
    //     setCategories( [...categories, 'Jin'] );
    // }



    return (
        <div className="container mx-auto mt-5">

            <h2><i className="fas fa-cat"></i> GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            {/* <button onClick={ handleAdd } >Agregar</button> */}

            <ul>
                { 
                    categories.map( category =>  
                            <GifGrid 
                                category={ category }
                                key={ category }
                            />)
                }
            </ul>



        </div>
    );

}

export default GifExpertApp;