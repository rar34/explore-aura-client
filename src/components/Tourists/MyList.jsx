import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [places, setPlaces] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/touristPlace/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaces(data)
            });
    }, [user])

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
                fetch(`http://localhost:5000/touristPlace/${id}`, {
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
                        }
                    })
            }
        });
    }

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
                                <button onClick={() => handleDelete(place._id)} className="btn text-white btn-success">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyList;