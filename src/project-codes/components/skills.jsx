import { portfolioData } from "../Data/portfolio-data";
export function RenderSkills() {
    return (
        <section>
            <h2>Technologies Learnt —</h2>
            {portfolioData.skills.map(data => {
                return <span>{data}</span>
            })}
        </section>
    )
}