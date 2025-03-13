import React, { useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { githubImg, projects } from "../constants/stuff";
import Pet from "../components/Pet";

function Projects() {
  const [clickedProject, setProject] = useState(null);

  function handleSelection(project) {
    setProject(project);
  }

  return (
    <section className="w-full h-full bg-text-lightest px-3 py-4 flex gap-4 overflow-hidden">
      {/* Sidebar - Project List */}
      <div className="w-[30%] h-full bg-text-lighter p-4 flex flex-col gap-3">
        <div className="w-full h-[80%] overflow-scroll">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleSelection(project)}
              className="flex items-center gap-4 p-2 shadow-md rounded-lg cursor-pointer hover:bg-text-lighter transition-all ease-in-out duration-300"
            >
              <img src={githubImg} alt="icon" className="w-12 h-12" />
              <span className="text-lg font-medium font-pixel text-main">
                {project.name}
              </span>
            </div>
          ))}
        </div>
        <Pet number={0} />
      </div>

      {/* Right Panel - Project Details */}
      <div className="w-[70%] h-full bg-text-lighter p-6 shadow-lg flex flex-col gap-4 font-pixel">
        {clickedProject ? (
          <>
            <h2 className="text-5xl font-semibold">{clickedProject.name}</h2>
            <p className="text-main text-2xl mb-2">
              {clickedProject.description}
            </p>
            <p className="text-text-lightest text-xl">
              {clickedProject.whereMade &&
                `Made at: ${clickedProject.whereMade}`}
            </p>
            <div>
              <h3 className="font-semibold">Tech Stack:</h3>
              {clickedProject.techStack?.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {clickedProject.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-background p-2 rounded text-center text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No tech stack provided</p>
              )}
            </div>

            <div className="flex gap-4 mt-3">
              {clickedProject.links?.github && (
                <a
                  href={clickedProject.links.github}
                  target="_blank"
                  className="text-blue-500 underline flex gap-1 justify-center items-center"
                >
                  GitHub <SquareArrowOutUpRight size={16} />
                </a>
              )}
              {clickedProject.links?.figma && (
                <a
                  href={clickedProject.links.github}
                  target="_blank"
                  className="text-blue-500 underline flex gap-1 justify-center items-center"
                >
                  Figma <SquareArrowOutUpRight size={16} />
                </a>
              )}
            </div>
          </>
        ) : (
          <p className="text-main font-pixel text-lg">
            Select a project to view details
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
