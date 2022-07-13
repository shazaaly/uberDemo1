import React from 'react'
import { useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hhemFhbHkiLCJhIjoiY2w1aGZoOGRwMDhoaTNkdGVrbTd1NHc0OCJ9.96UDG49EaqVkC5a1Vo_Syg'


const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [26.8206, 30.8025],
            zoom: 3
        });
    });



    return (
        <Wrapper id='map'></Wrapper>
    )
}


export default Map


const Wrapper = tw.div`
flex-1

`
