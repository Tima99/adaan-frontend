import Boy from "../../../assets/ak47.jpg";

const Layout2 = () => {
    return (
        <div className="max-w-3xl mx-auto p-5">
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
                <div className="w-28 h-28 rounded-full bg-gray-500 overflow-hidden object-cover">
                    <img
                        src={Boy}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-2xl font-bold">Amit Kumar</p>
                    <p className="text-gray-600">+91 7210019195</p>
                    <p className="text-gray-600">amit208201@gmail.com</p>
                </div>
            </div>

            {/* Past Experience Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Past Experience</h2>
                <div className="mt-4 space-y-4">
                    <div>
                        <p className="font-bold">Software Engineer</p>
                        <p className="text-gray-600">
                            XYZ Company, 2020 - 2023
                        </p>
                        <p className="text-gray-600">
                            Worked on developing web applications using the MERN
                            stack.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Intern</p>
                        <p className="text-gray-600">ABC Corp, 2019 - 2020</p>
                        <p className="text-gray-600">
                            Assisted in the development of internal tools and
                            performed code reviews.
                        </p>
                    </div>
                </div>
            </div>

            {/* Qualifications Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Qualifications</h2>
                <div className="mt-4 space-y-4">
                    <div>
                        <p className="font-bold">
                            Bachelor of Technology in Computer Science
                        </p>
                        <p className="text-gray-600">
                            ABC University, 2016 - 2020
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">
                            Higher Secondary Certificate
                        </p>
                        <p className="text-gray-600">XYZ School, 2014 - 2016</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Skills</h2>
                <div className="mt-4 space-y-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        JavaScript
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        React
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Node.js
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        MongoDB
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Express
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Tailwind CSS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Git
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Layout2;
