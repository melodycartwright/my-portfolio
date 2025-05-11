import ProjectCard from "../components/ProjectCard";
import {projects} from '../data/projects';
function Projects() {
    return(
        <section id="projects" className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}

                </div>

            </div>

        </section>
    );
}
export default Projects;