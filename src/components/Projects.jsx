import HollowRemake from "../assets/videos/HollowRemake.mp4";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hollow Remake",
      video: HollowRemake,
    },
    {
      id: 2,
      title: "Hollow Remake",
      video: HollowRemake,
    },
    {
      id: 3,
      title: "Hollow Remake",
      video: HollowRemake,
    },
    {
      id: 4,
      title: "Hollow Remake",
      video: HollowRemake,
    },
    {
      id: 5,
      title: "Hollow Remake",
      video: HollowRemake,
    },
  ];

  return (
    <section
      className="bg-projectBg bg-no-repeat bg-center bg-cover pb-20 font-montserrat"
      id="projects"
    >
      <div className="w-[95%] md:w-[90%] m-auto py-20">
        <h2 className="text-secondary pt-20 text-center uppercase font-bold text-5xl underline">
          Projects
        </h2>
        <p className="text-white text-base pb-20 text-center pt-6">
          A few projects I have worked on with Unreal Engine/C++
        </p>

        <div className="flex justify-center flex-wrap gap-12">
          {projects.map((project) => (
            <div className="projectCard w-[25rem] h-auto relative cursor-pointer overflow-hidden">
              <div className="overlay"></div>
              <div className="linkContainer absolute top-[150%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center z-[100] w-[85%] m-auto duration-500">
                <h2 className="text-white font-courgette font-bold text-2xl">
                  {project.title}
                </h2>
              </div>
              <video className="w-full h-full" autoPlay loop>
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
