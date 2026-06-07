import { portfolioData } from "../Data/portfolio-data";

export function RenderProjects() {
    return (
        <section id="projects">
            <h2>What i've Built</h2>
            {
                portfolioData.projects.map(proj => {
                    return (
                        <div>
                            <div>{proj.name} — </div>
                            <div>{proj.description}</div>
                            <div>
                                {proj.techStack.map(data => <span>{data}</span>)}
                            </div>
                            <a href={proj.live} target="_blank">Check Live</a>
                            <a href={proj.github} target="_blank">Github link</a>
                        </div>
                    )
                })
            }
        </section>
    )
}