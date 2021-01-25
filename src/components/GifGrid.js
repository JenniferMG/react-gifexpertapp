import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => { // por primera vez
    //     getGifs( category ).then( setImages );
    // }, [ category ]);

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn mb-4 text-capitalize"> { category } </h3>

            { 
                loading && <div className="d-flex justify-content-center">
                                <div className="spinner-border text-light"></div>
                            </div>
            }

            <div className="card-columns mb-5">

                {
                    // images.map( img => ( 
                    //     <li key={ img.id }> { img.title } </li>
                    // ))

                    // images.map( ({ id, title }) => (
                    //     <li key={ id }> { title } </li>
                    // ))

                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
            <hr/>
        </>
    )
}
