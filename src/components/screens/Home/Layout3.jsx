import Boy from "../../../assets/ak47.jpg";

const Layout3 = () => (
    <div className="p-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg text-white">
        <div className="flex items-center space-x-4 mb-4">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <img
                    src={Boy}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <p className="text-2xl font-bold">Amit Kumar</p>
                <p>+91 7210019195</p>
                <p>amit208201@gmail.com</p>
            </div>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold">Past Experience</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <p className="font-bold">Software Engineer</p>
                    <p>XYZ Company, 2020 - 2023</p>
                    <p>
                        Worked on developing web applications using the MERN
                        stack.
                    </p>
                </div>
                <div>
                    <p className="font-bold">Intern</p>
                    <p>ABC Corp, 2019 - 2020</p>
                    <p>
                        Assisted in the development of internal tools and
                        performed code reviews.
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold">Qualifications</h2>
            <div className="mt-4 space-y-4">
                <div>
                    <p className="font-bold">
                        Bachelor of Technology in Computer Science
                    </p>
                    <p>ABC University, 2016 - 2020</p>
                </div>
                <div>
                    <p className="font-bold">Higher Secondary Certificate</p>
                    <p>XYZ School, 2014 - 2016</p>
                </div>
            </div>
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="mt-4 space-y-2">
                {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "Tailwind CSS",
                    "Git",
                ].map((skill) => (
                    <span
                        key={skill}
                        className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default Layout3