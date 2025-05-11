export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
}
interface ProjectCardProps{
    project: Project;

}
function ProjectCard ({ project}: ProjectCardProps) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4"/>
            <h3 className="text-xl fonnt-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4"> {project.description}</p>
            <a href={project.url}
            target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:underline"> View Projects →

            </a>
        </div>
    );
}
export default ProjectCard;
