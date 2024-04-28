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

    const { image, country_name, location, short_description, tourists_spot_name, averageCost, totalVisitorsPerYear, travel_time, seasonality } = places || {};

    return (
        <div className="card card-compact md:p-24 md:w-2/3 mx-auto my-14 bg-base-100 shadow-xl">
            <figure><img className="p-2" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-2xl md:text-5xl font-bold">{tourists_spot_name}</h2>
                <h3 className="text-xl font-semibold md:text-3xl">{country_name}</h3>
                <h3 className="text-xl font-semibold md:text-xl">Located In: <span className="text-gray-500">{location}</span></h3>
                <p className="font-semibold">{short_description}</p>
                <table className="table">
                    
                    <tbody>
                        {/* row 1 */}
                        <tr className="font-bold">
                            <td>Travel Time: {travel_time}</td>
                            <td>Seasonality: {seasonality}</td>
                        </tr>
                        <tr className="font-bold">
                            <td>Total Visitor Per Year: {totalVisitorsPerYear}</td>
                            <td>Average Cost: {averageCost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewDetails;


<div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
        </thead>
        <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>
        </tbody>
    </table>
</div>