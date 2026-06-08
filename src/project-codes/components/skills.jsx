import { portfolioData } from "../Data/portfolio-data";
export function RenderSkills() {
    return (
        <section className="text-md text-(--ink-brush) p-4">
            <h2 className="primary-font tracking-widest text-3xl py-2 text-(--ink-black)">Technologies Learnt —</h2>
            <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map(data => {
                    return <span className='px-2 bg-(--ink-ballpoint) text-(--pencil-light) secondary-font'
                        key={data}>
                        {data}
                    </span>
                })}
                <span className="bg-(--ink-fineliner) px-2 secondary-font text-(--pencil-light)">
                    Typescript ↗
                </span>
            </div>
        </section>
    )
}