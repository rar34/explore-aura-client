import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext);
    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const touristSportName = form.touristSpotName.value;
        const countryName = form.countryList.value;
        const location = form.location.value;
        const photoURL = form.photoURL.value;
        const seasonality = form.seasonality.value;
        const averageCost = form.averageCost.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const userName = form.userName.value;
        const shortDescription = form.shortDescription.value;

        const place = { touristSportName, countryName, location, photoURL, seasonality, averageCost, travelTime, totalVisitorsPerYear, userName, shortDescription, email: user.email }

        form.reset();
        console.log(place)
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
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">User Name</span>
                        </div>
                        <input name="userName" type="text" placeholder="User Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
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