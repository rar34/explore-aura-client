import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountries(data)
            })
    }, [])
    return (
        <div>
            <h2 className="text-3xl my-14 font-bold text-center">Countries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    countries.map(country =>
                        <Link key={country._id} to={`/countryDetails/${country.country_name}`}>
                            <div className="card card-compact bg-base-100 shadow-lg">
                                <figure><img src={country.image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{country.country_name}</h2>
                                    <p>{country.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Country;