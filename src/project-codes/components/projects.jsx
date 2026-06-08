import { portfolioData } from "../Data/portfolio-data";

export function RenderProjects() {
    return (
        <section id="projects" className="secondary-font text-(--ink-brush) text-xl p-4">
            <h2 className="text-(--ink-black) primary-font text-3xl ">What i've Built — </h2>
            <div className="flex flex-col gap-4 max-w-[80%] text-(--pencil-dark)">
                {
                    portfolioData.projects.map(proj => {
                        return (
                            <div className="flex flex-wrap gap-2"
                                key={proj.name}>
                                <div className="primary-font text-2xl">{proj.name} — </div>
                                <div className="ml-4">{proj.description}</div>
                                <h3 className="text-(--ink-fineliner)">TechStack : </h3>
                                <div className="secondary-font text-md flex flex-wrap gap-2">
                                    {proj.techStack.map(data => <span key={data} className="bg-(--ink-ballpoint) text-(--pencil-light) px-2">{data}</span>)}
                                </div>
                                <h3 className="text-(--ink-fineliner)">Available at : </h3>
                                <div className="flex flex-wrap gap-2 text-(--pencil-light) text-md">
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