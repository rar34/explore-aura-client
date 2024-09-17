import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "./AllTouristsSpotCard";
import { useState } from "react";

const AllTouristsSpot = () => {
    const loadedPlaces = useLoaderData();
    const [places, setPlaces] = useState(loadedPlaces);
    const [sortBy, setSortBy] = useState(null)

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        let sortedPlaces = [...places];
        switch (e.target.value) {
            case 'ascending':
                sortedPlaces.sort((a, b) => parseFloat(a.averageCost) - parseFloat(b.averageCost));
                break;
            case 'descending':
                sortedPlaces.sort((a, b) => parseFloat(b.averageCost) - parseFloat(a.averageCost));
                break;
            default:
                break;
        }
        setPlaces(sortedPlaces);
    };
    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="mt-14 text-center text-3xl font-bold">All Tourists spot</h2>
            <p className="text-center md:w-1/2 mx-auto text-xl mt-4 mb-10">Discover some of the most captivating tourist destinations around the world! From serene beaches to bustling cities, and historic landmarks to natural wonders, every spot offers a unique experience.</p>
            <div className="dropdown dropdown-bottom flex justify-center">
                <select value={sortBy} onChange={handleSortChange} className="btn btn-success m-1 -mt-6 mb-6 text-white text-xl font-semibold">
                    <option disabled value="">Sort By Average Cost</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    places.map(place => <AllTouristsSpotCard key={place._id} place={place}></AllTouristsSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;