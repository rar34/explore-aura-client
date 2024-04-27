import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "./AllTouristsSpotCard";

const AllTouristsSpot = () => {
    const loadedPlaces = useLoaderData();
    console.log(loadedPlaces)
    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="my-14 text-center text-3xl font-bold">All Tourists spot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedPlaces.map(place => <AllTouristsSpotCard key={place._id} place={place}></AllTouristsSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;