/* eslint-disable react/prop-types */
import Boy from "../../../assets/ak47.jpg";

const Layout3 = ({ profile }) => {
    if (!profile) return <div className="w-full py-20 text-xl">No Profile Found</div>;

    return (
        <div className="p-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg text-white">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                    <img
                        src={
                            `http://localhost:8000/${profile.basicDetail?.image}` ||
                            Boy
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-2xl font-bold">
                        {profile.basicDetail.name}
                    </p>
                    <p> {profile.contactDetail?.phone}</p>
                    <p>{profile.contactDetail?.email}</p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Past Experience</h2>
                <div className="mt-4 space-y-4">
                    {profile.experiences?.map((exp) => {
                        return (
                            <div key={exp._id}>
                                <p className="font-bold">{exp.position}</p>
                                <p>
                                    {exp.company},{exp.startDate?.split("T")[0]}
                                    -{exp.endDate?.split("T")[0] || "Present"}
                                </p>
                                <p>{exp.summary}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Qualifications</h2>
                <div className="mt-4 space-y-4">
                    {profile.qualifications?.map((qual) => {
                        return (
                            <div key={qual._id}>
                                <p className="font-bold">{qual.degree} </p>
                                <p>
                                    {qual.college},
                                    {qual.startDate?.split("T")[0]} -
                                    {qual.endDate?.split("T")[0] || "N/A"}
                                </p>
                                <p>
                                    {qual.cgpa}
                                </p>
                            </div>
                        );
                    })}
                    <div>
                        <p className="font-bold">
                            Higher Secondary Certificate
                        </p>
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
};

export default Layout3;
