import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HomePlaceCard from "./HomePlaceCard";

const Home = () => {
    const loadedPlaces = useLoaderData();
    console.log(loadedPlaces)
    return (
        <div className="px-4 md:px-20 my-10">
            <Banner></Banner>
            <h2 className="my-14 text-center font-bold text-3xl">Tourists Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedPlaces.slice(0,6).map(place => <HomePlaceCard key={place._id} place={place}></HomePlaceCard>)
                }
            </div>
        </div>
    );
};

export default Home;