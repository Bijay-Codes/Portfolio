import { portfolioData } from "../Data/portfolio-data";
export function RenderSkills() {
    return (
        <section className="text-md text-(--ink-brush) px-2">
            <h2 className="primary-font tracking-widest text-3xl text-(--ink-black ml-2 pb-4">Technologies Learnt —</h2>
            <div className="flex flex-wrap gap-2 ml-4">
                {portfolioData.skills.map(data => {
                    return <span className='px-2 bg-(--ink-ballpoint) text-(--pencil-light)' key={data}>{data}</span>
                })}
            </div>
        </section>
    )
}