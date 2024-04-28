import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CountryDetails = () => {
    const loadCountry = useLoaderData();
    const { country_name } = useParams()
    // console.log(country_name)
    const [country, setCountry] = useState([])

    useEffect(() => {
        const remaining = loadCountry.filter(c => c.country_name === country_name)
        setCountry(remaining)
    }, [country_name, loadCountry])

    console.log(country)
    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="text-3xl text-center font-bold my-14">Countries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    country.map(allCountry =>
                        <div key={allCountry._id} className="card bg-base-100 shadow-xl">
                            <figure><img src={allCountry.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{allCountry.tourists_spot_name}</h2>
                                <h2 className="font-semibold text-xl">{allCountry.country_name}</h2>
                                <p className="font-medium">{allCountry.location}</p>
                                <p>{allCountry.short_description}</p>
                                <p className="font-medium text-gray-500 flex flex-col md:flex-row justify-between"><span>Average Cost: ${allCountry.averageCost}</span> <span>Seasonality: {allCountry.seasonality}</span></p>
                                <Link to={`/view-details/${allCountry._id}`}><button className="btn text-white w-full my-4 btn-success">View Details</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CountryDetails;