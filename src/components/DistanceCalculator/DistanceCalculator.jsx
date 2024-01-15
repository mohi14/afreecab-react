import React, { useState } from 'react';

const DistanceCalculator = () => {
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [distance, setDistance] = useState(null);

    const handleInputChange = (e, location) => {
        const { value } = e.target;
        location === 'location1' ? setLocation1(value) : setLocation2(value);
    };

    const calculateDistance = async () => {
        const apiKey = 'AIzaSyBHKLq03eYj63KM24ZVlOmoQSJYV0yTB-U';
        const geocodingUrl = (place) =>
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                place
            )}&key=${apiKey}`;

        try {
            const [response1, response2] = await Promise.all([
                fetch(geocodingUrl(location1)),
                fetch(geocodingUrl(location2))
            ]);

            const [data1, data2] = await Promise.all([response1.json(), response2.json()]);

            console.log('Geocoding Response 1:', data1);
            console.log('Geocoding Response 2:', data2);

            const location1Coords = data1?.results[0]?.geometry?.location;
            const location2Coords = data2?.results[0]?.geometry?.location;

            if (location1Coords && location2Coords) {
                const calculatedDistance = calculateHaversineDistance(
                    location1Coords.lat,
                    location1Coords.lng,
                    location2Coords.lat,
                    location2Coords.lng
                );

                setDistance(calculatedDistance);
                console.log('Calculated Distance:', calculatedDistance);
            } else {
                console.error('Error fetching geocoding data: Invalid response');
            }
        } catch (error) {
            console.error('Error fetching geocoding data:', error);
        }
    };

    const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const toRadians = (angle) => {
        return (angle * Math.PI) / 180;
    };

    return (
        <div style={{ marginTop: "250px" }}>
            <h2>Distance Calculator</h2>
            <label>
                Location 1:
                <input
                    type="text"
                    placeholder="Enter place name"
                    value={location1}
                    onChange={(e) => handleInputChange(e, 'location1')}
                />
            </label>
            <br /> <br />

            <label>
                Location 2:
                <input
                    type="text"
                    placeholder="Enter place name"
                    value={location2}
                    onChange={(e) => handleInputChange(e, 'location2')}
                />
            </label>

            <button onClick={calculateDistance}>Calculate Distance</button>
            {distance !== null && <p>Distance: {distance.toFixed(2)} kilometers</p>}
        </div>
    );
};

export default DistanceCalculator;
