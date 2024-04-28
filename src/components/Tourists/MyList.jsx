import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [places, setPlaces] = useState([]);
    console.log(user.email)
    console.log(places)

    // const { image } = places;

    useEffect(() => {
        fetch(`http://localhost:5000/touristPlace/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaces(data)
            });
    }, [user])
    return (
        <div className="px-4 md:px-36 my-10">
            <h2 className="text-3xl text-center font-bold my-14 border-2 rounded-lg shadow-md p-5">My List</h2>
            {
                places?.map(place =>
                    <div key={place._id} className="card card-side mb-4 bg-base-100 shadow-lg">
                        <figure><img className="w-48 md:w-80" src={place.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{place.tourists_spot_name}</h2>
                            <p>{place.country_name}</p>
                            <p>{place.short_description}</p>
                            <div className="flex gap-2 md:gap-4 justify-end">
                                <button className="btn text-white btn-success">Update</button>
                                <button className="btn text-white btn-success">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyList;