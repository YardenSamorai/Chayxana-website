import React, { useState } from 'react'
import './MapBox.css';

const MapBox = () => {

    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoieWFyZGVuc2Ftb3JhaTYiLCJhIjoiY2w5MWg3NXp3MDZpZDN1bW9xcXFldmpvaCJ9.5HLvTJZVWJwjGvJ7b3y0iw';
    var map = new mapboxgl.Map({
        container: 'boxMap-container',
        style: 'mapbox://styles/yardensamorai6/cl91h9m3l001415mn3c3wyisg'
    });


    return (
        <div className="boxMap-container">
            {mapboxgl}
        </div>
    )
}

export default MapBox