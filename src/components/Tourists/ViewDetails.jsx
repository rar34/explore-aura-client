import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const [places, setPlaces] = useState({});
    const loadedPlaces = useLoaderData()
    const { id } = useParams();
    console.log(places, id);

    useEffect(() => {
        if (loadedPlaces) {
            const place = loadedPlaces.find(place => place._id === id);
            setPlaces(place)
        }
    }, [loadedPlaces, id]);

    const { image,country_name, location, short_description, tourists_spot_name, averageCost, totalVisitorsPerYear, travel_time, seasonality } = places || {};

    return (
        <div className="card card-compact md:w-2/3 mx-auto my-14 bg-base-100 shadow-xl">
            <figure><img className="p-2" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-2xl md:text-5xl font-bold">{ tourists_spot_name }</h2>
                <h3 className="text-xl font-semibold md:text-3xl">{country_name}</h3>
                <p className="font-semibold">{short_description}</p>

            </div>
        </div>
    );
};

export default ViewDetails;