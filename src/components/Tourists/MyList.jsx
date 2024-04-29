import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const MyList = () => {
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext);
    const [places, setPlaces] = useState([]);
    // const [newPlaces, setNewsPlaces] = useState(places);
    // console.log(newPlaces)
    // console.log(places)
    const navigate = useNavigate();

    
    useEffect(() => {
        fetch(`https://explore-aura-server.vercel.app/touristPlace/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setLoading(false)
                setPlaces(data)
            });
    }, [user, setLoading])

    if(loading){
        return <div className="text-center my-14"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://explore-aura-server.vercel.app/touristPlace/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your place has been deleted.",
                                icon: "success"
                            });
                            navigate("/all-tourists-spot")
                        }
                    })
            }
        });
    }

    return (
        <div className="px-4 md:px-36 my-10">
            <h2 className="text-3xl text-center font-bold my-14 border-2 rounded-lg shadow-md p-5">My List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tourists Sport Name</th>
                            <th>Location & Travel time</th>
                            <th>Average Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            places?.map(place =>
                                <tr key={place._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={place.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{place.tourists_spot_name}</div>
                                                <div className="text-sm opacity-50">{place.country_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {place.location}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{place.travel_time}</span>
                                    </td>
                                    <td>${place.averageCost}</td>
                                    <th>
                                        <Link to={`/updatePlace/${place._id}`}><button className="btn btn-outline btn-success btn-xs">Update</button></Link>
                                        <button onClick={() => handleDelete(place._id)} className="btn btn-outline btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyList;