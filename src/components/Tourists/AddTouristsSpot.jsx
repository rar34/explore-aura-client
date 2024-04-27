
const AddTouristsSpot = () => {
    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="text-3xl font-bold text-center my-6">Add a Tourist Spot</h2>
            <form>
                {/* Tourist spot name and Country Name */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Tourist Spot Name</span>
                        </div>
                        <input name="tourist-sport-name" type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Country Name</span>
                        </div>
                        {/* <input name="quantity" type="text" placeholder="Available Quantity" className="input input-bordered w-full " /> */}
                        <select className="border bg-transparent p-3 rounded-lg" name="" id="">
                            <option value="">Select Country</option>
                            <option value="bd">Bangladesh</option>
                            <option value="thailand">Thailand</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="vietnam">Vietnam</option>
                            <option value="cambodia">Cambodia</option>
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
                        <input name="totaVisitorsPerYear" type="text" placeholder="Total visitors per year" className="input input-bordered w-full " />
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