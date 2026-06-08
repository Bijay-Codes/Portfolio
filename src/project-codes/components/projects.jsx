import { portfolioData } from "../Data/portfolio-data";

export function RenderProjects() {
    return (
        <section id="projects" className="secondary-font text-(--ink-brush) ml-4">
            <h2 className="text-(--ink-black) primary-font ">What i've Built — </h2>
            <div className="flex flex-col gap-2 max-w-[80%] ml-4">
                {
                    portfolioData.projects.map(proj => {
                        return (
                            <div className="flex flex-wrap gap-1">
                                <div className="primary-font text-xl">{proj.name} — </div>
                                <div className="ml-4">{proj.description}</div>
                                <h3>TechStack : </h3>
                                <div className="secondary-font flex flex-wrap gap-2">
                                    {proj.techStack.map(data => <span className="bg-(--ink-ballpoint) text-(--pencil-light) px-2">{data}</span>)}
                                </div>
                                <h3>Available at : </h3>
                                <div className="flex flex-wrap gap-2 text-(--pencil-light)">
                                    <a href={proj.live} className="px-2 bg-(--pencil-dark)" target="_blank">Live</a>
                                    <a href={proj.github} className="px-2 bg-(--pencil-dark)" target="_blank">Github</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}