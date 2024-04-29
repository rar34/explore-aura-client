import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePlace = () => {
    const navigate = useNavigate()
    const places = useLoaderData()
    const { _id, image, location, short_description, tourists_spot_name, averageCost, totalVisitorsPerYear, travel_time, seasonality } = places
    const handleUpdate = e => {
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

        const updatedPlace = { tourists_spot_name, country_name, location, image, seasonality, averageCost, travel_time, totalVisitorsPerYear, short_description }
        form.reset();
        fetch(`https://explore-aura-server.vercel.app/touristPlace/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedPlace)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Places Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                navigate('/my-list')
            })
    }
    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="text-3xl font-bold text-center my-6">Update Place</h2>
            <form className="border-2 border-gray-200 p-6 rounded-xl shadow-lg" onSubmit={handleUpdate}>
                {/* Tourist spot name and Country Name */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Tourist Spot Name</span>
                        </div>
                        <input name="touristSpotName" type="text" defaultValue={tourists_spot_name} placeholder="Tourist Spot Name" className="input input-bordered w-full " />
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
                        <input defaultValue={location} name="location" type="text" placeholder="Location" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">PhotoURL</span>
                        </div>
                        <input name="photoURL" defaultValue={image} type="text" placeholder="PhotoURL" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* Seasonality and average cost */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Seasonality</span>
                        </div>
                        <input defaultValue={seasonality} name="seasonality" type="text" placeholder="Seasonality" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Average Cost</span>
                        </div>
                        <input defaultValue={averageCost} name="averageCost" type="text" placeholder="Average Cost" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* Travel time and total visitor per year */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Travel Time</span>
                        </div>
                        <input defaultValue={travel_time} name="travelTime" type="text" placeholder="Travel Time" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Total Visitor</span>
                        </div>
                        <input defaultValue={totalVisitorsPerYear} name="totalVisitorsPerYear" type="text" placeholder="Total visitors per year" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* User Name */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Short Description</span>
                        </div>
                        <textarea defaultValue={short_description} name="shortDescription" type="text" placeholder="Short Description" className="input input-bordered w-full " />
                    </label>
                </div>

                <input className="btn btn-success text-white w-full" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdatePlace;