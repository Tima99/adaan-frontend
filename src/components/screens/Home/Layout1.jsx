import Boy from "../../../assets/ak47.jpg";

const Layout1 = () => {
    const experience = [
        {
            company: "Company A",
            role: "Software Engineer",
            duration: "Jan 2023 - Present",
            description:
                "Worked on various web development projects using MERN stack.",
        },
        {
            company: "Company B",
            role: "Intern",
            duration: "Jun 2022 - Dec 2022",
            description:
                "Assisted in developing and maintaining web applications.",
        },
    ];

    const qualifications = [
        "Bachelor of Technology in Computer Science",
        "Certified MERN Stack Developer",
    ];

    const skills = [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
        "Tailwind CSS",
    ];

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-gray-500 overflow-hidden">
                    <img
                        src={Boy}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-xl font-bold mt-4">Amit Kumar</h1>
                <p className="text-gray-600">+91 7210019195</p>
                <p className="text-gray-600">amit208201@gmail.com</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Past Experience</h2>
                {experience.map((exp, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <p className="text-gray-600">{exp.role}</p>
                        <p className="text-gray-500">{exp.duration}</p>
                        <p className="text-gray-700">{exp.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Qualifications</h2>
                <ul className="list-disc list-inside">
                    {qualifications.map((qualification, index) => (
                        <li key={index} className="text-gray-700">
                            {qualification}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <ul className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Layout1;
