import { portfolioData } from "../Data/portfolio-data"
export function RenderExperience() {
    return (
        <section>
            <h2>Training and Experience —</h2>
            <span>Place — </span>
            <div>
                {portfolioData.training.place}
            </div>
            <span>Duration — </span>
            <div>{portfolioData.training.duration}</div>
            <div>{portfolioData.training.type}</div>
            <h3>What i did there? — </h3>
            <div>{portfolioData.training.description}</div>
        </section>
    )
}