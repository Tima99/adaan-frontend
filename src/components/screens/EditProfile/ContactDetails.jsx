const ContactDetails = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <form>
                {/* Add form fields for contact details here */}
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" className="border p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone:</label>
                    <input type="tel" className="border p-2 w-full" />
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

export default ContactDetails;
