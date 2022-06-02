import { useEffect, useState, useRef } from 'react';



export const useFetch = ( url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect ( () => {
            return ( ) =>{
                isMounted.current = false;
            }
    }, [ ])


    useEffect ( () => {


        setState ({ data: null, loading: true, error: null }); // Para que aparezca el loading cuando da siguiente

        fetch ( url )
            .then ( resp => resp.json () )
            .then ( data => {

                if(isMounted.current){
                    setState({
                        loading: false,
                        error:null,
                        data
                    }) 
                } 
        })

    }, [url])

    return state;

}