
const BasicDetails = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold">Basic Details</h2>
            <form>
                {/* Add form fields for basic details here */}
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input type="text" className="border p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Date of Birth:
                    </label>
                    <input type="date" className="border p-2 w-full" />
                </div>
                {/* Add more fields as needed */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default BasicDetails;
