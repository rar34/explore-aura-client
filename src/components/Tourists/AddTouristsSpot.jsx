import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext);
    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const tourists_spot_name = form.touristSpotName.value;
        const country_name = form.countryList.value;
        const location = form.location.value;
        const image = form.photoURL.value;
        const seasonality = form.seasonality.value;
        const averageCost = form.averageCost.value;
        const travel_time = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        // const userName = form.userName.value;
        const short_description = form.shortDescription.value;

        const newPlace = { tourists_spot_name, country_name, location, image, seasonality, averageCost, travel_time, totalVisitorsPerYear, short_description, user_name: user.displayName, user_email: user.email }
        form.reset();

        // console.log(newPlace)
        // send data to the server
        fetch("http://localhost:5000/touristPlace",{
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(newPlace)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Places added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }

    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="text-3xl font-bold text-center my-6">Add a Tourist Spot</h2>
            <form className="border-2 border-gray-200 p-6 rounded-xl shadow-lg" onSubmit={handleAddTouristSpot}>
                {/* Tourist spot name and Country Name */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Tourist Spot Name</span>
                        </div>
                        <input name="touristSpotName" type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Country Name</span>
                        </div>
                        {/* <input name="quantity" type="text" placeholder="Available Quantity" className="input input-bordered w-full " /> */}
                        <select className="border bg-transparent p-3 rounded-lg" name="countryList" id="countryList">
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Cambodia">Cambodia</option>
                        </select>
                    </label>
                </div>
                {/* Location and photo URL */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Location</span>
                        </div>
                        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">PhotoURL</span>
                        </div>
                        <input name="photoURL" type="text" placeholder="PhotoURL" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* Seasonality and average cost */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Seasonality</span>
                        </div>
                        <input name="seasonality" type="text" placeholder="Seasonality" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Average Cost</span>
                        </div>
                        <input name="averageCost" type="text" placeholder="Average Cost" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* Travel time and total visitor per year */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Travel Time</span>
                        </div>
                        <input name="travelTime" type="text" placeholder="Travel Time" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Total Visitor</span>
                        </div>
                        <input name="totalVisitorsPerYear" type="text" placeholder="Total visitors per year" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* User Name */}
                <div className="md:flex mb-4">
                    {/* <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">User Name</span>
                        </div>
                        <input name="userName" type="text" placeholder="User Name" className="input input-bordered w-full " />
                    </label> */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Short Description</span>
                        </div>
                        <textarea name="shortDescription" type="text" placeholder="Short Description" className="input input-bordered w-full " />
                    </label>
                </div>

                <input className="btn btn-success w-full" type="submit" value="Add Place" />
            </form>
        </div>
    );
};

export default AddTouristsSpot;