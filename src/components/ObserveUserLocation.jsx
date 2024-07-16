import { observeUserLocation } from 'ayoba-microapp-api'
import React, { useState } from 'react'

export default function ObserveUserLocation() {
    const [userLocation, setUserLocation] = useState()

    observeUserLocation(
        (val) => setUserLocation(val),
        (err) => alert("an error occured")
    )

    return (
        <section >
            <h3>observeUserLocation()</h3>
            <div>
                <p>lat: {userLocation?.lat || "null"}</p> 
                <p>lon: {userLocation?.lon || "null"} </p>
            </div>
        </section>
    )
}
