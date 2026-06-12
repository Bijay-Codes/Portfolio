import { portfolioData } from "../Data/portfolio-data";

export function RenderProjects() {
    const linkStyle = "sketch px-2 bg-(--pencil-dark) text-(--pencil-light) hover:bg-(--ink-ballpoint)/70 hover:text-(--ink-black) duration-300 ease-in";
    return (
        <section id="projects" className="secondary-font text-(--ink-brush) text-base p-4 w-full">
            <h2 className="text-(--ink-black) primary-font text-3xl py-4">What i've Built — </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 text-(--pencil-dark) max-w-[80%]">
                {
                    portfolioData.projects.map(proj => (
                        <div key={proj.name}
                            className="hover:bg-(--paper-worn)/60 hover:outline-2 duration-600 shadow-2xl shadow-black/50
                          ease-in-out flex flex-col gap-3 border border-(--ink-ballpoint) rounded-lg bg-(--paper-worn)/10 sketch-2 p-3">
                            <div className="w-full h-fit overflow-hidden">
                                <img loading="lazy"
                                    src={proj.image}
                                    alt={proj.name}
                                    className="object-cover object-top-right rounded-xl"
                                />
                            </div>
                            <div className="primary-font text-2xl">{proj.name} —</div>
                            <p className="ml-4">{proj.description}</p>

                            <div className="flex flex-wrap gap-2 items-center">
                                <h3 className="text-(--ink-fineliner)">TechStack :</h3>
                                {proj.techStack.map(data => (
                                    <span key={data} className="sketch secondary-font bg-(--ink-ballpoint) text-(--pencil-light) px-2 hover:bg-(--ink-ballpoint)/70 hover:text-(--ink-black) duration-300 ease-in">
                                        {data}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 items-center">
                                <h3 className="text-(--ink-fineliner)">Available at :</h3>
                                <a href={proj.live} className={linkStyle} target="_blank">Live</a>
                                <a href={proj.github} className={linkStyle} target="_blank">Github</a>
                                <a href={proj.caseStudy} className={linkStyle} target="_blank">Case-Study</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}