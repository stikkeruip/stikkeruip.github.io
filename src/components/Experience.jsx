import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
  const experiences = [
    {
      title: "Quality Enablement Associate Tester - Mobile App",
      company: "Ibotta, Inc. - Denver, CO",
      jobs: [
        "Weekly Testing & Bug Reporting",
        "Communicating with Engineering ",
        "Digital Stakeholders to Prioritize tickets",
      ],
    },
    {
      title: "Ecommerce Project Coordinator",
      company: "Nixon - Carlsbad, CA",
      jobs: [
        "Salesforce to Shopify Site Migration",
        "E2E and UAT Testing Project Manager",
        "Cross-Functional Communication",
      ],
    },
    {
      title: "Full Stack Web Development",
      company: "University of California, Irvine",
      jobs: [
        "HTML + CSS",
        "JavaScript",
        "jQuery",
        "React.js",
        "MySQL",
        "Git",
        "API",
        "Unit Testing",
        "Algorithms & Data Structures",
      ],
    },
    {
      title: "Master of Public Relations & Advertising",
      company: "University of New South Wales, Sydney, Australia",
      jobs: [
        "Brand Management",
        "Advanced Message Design",
        "Advertising & Technology",
        " Journalism & Technology",
      ],
    },
  ];

  return (
    <section
      className="lg:w-[80%] md:w-[90%] w-[95%] m-auto pt-28 pb-40"
      id="experiece"
    >
      <h2 className="title">Experiences</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <div className="bg-white shadow-2xl rounded-lg p-4" key={index}>
            <h2 className="text-secondary font-montserrat font-bold text-center text-xl w-[95%] m-auto pb-5">
              {experience.title}
            </h2>
            <h3 className="text-secondary font-montserrat font-semibold text-center w-[95%] m-auto pb-5">
              {experience.company}
            </h3>
            {experience.jobs.map((job, index) => (
              <div
                key={index}
                className="flex items-center gap-8 lgC:w-[80%] w-[90%] m-auto pt-3 text-gray-600 text-[1.05rem] font-montserrat font-medium"
              >
                <BsArrowRight />
                <p>{job}</p>
              </div>
            ))}
          </div>
        ))}
        {/* <div className="bg-white shadow-2xl rounded-lg"></div> */}
      </div>
    </section>
  );
};

export default Experience;
