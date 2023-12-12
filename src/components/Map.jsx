import React from "react"
import { useState } from "react"
import ReactMapGL from "react-map-gl"

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.523064,
    longitude: -122.676483,
    zoom: 10,
  })

  return (
    <div className="map_wrap">
      <div className="map">
        <ReactMapGL
          mapStyle={"mapbox://style/mapbox/dark-v9"}
          mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </div>
  )
}

export default Map
