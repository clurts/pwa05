import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl'
import { useState } from 'react'

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 55.7060378,
        longitude: 12.5142235,
        zoom: 15,
        width: "100vw",
        height: "50vh"
    });

    const navigationControlStyle = {
        right: 16,
        top: 56
    }
    const geolocateControlStyle = {
        right: 16,
        top: 16
    }

    return ( 
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle='mapbox://styles/mapbox/streets-v11'
        >
            <NavigationControl style={navigationControlStyle}/>
            <GeolocateControl 
                style={geolocateControlStyle} 
                trackUserLocation={true} 
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}
                auto
            />
            <Marker latitude={55.7060378} longitude={12.5142235}>
                <div style={{width: "1em", height:"1em", backgroundColor: "orange"}}></div>
            </Marker>
        </ReactMapGL>
     );
}
 
export default Map;