import { portfolioData } from "../Data/portfolio-data";
export function RenderSkills() {
    return (
        <section className="text-md text-(--ink-brush) p-4">
            <h2 className="primary-font tracking-widest text-3xl py-2 text-(--ink-black)">Tech-Stack —</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <div>Skills</div>
                    {portfolioData.skills.languages.map(data => {
                        return <span className='px-2 bg-(--ink-ballpoint) hover:bg-(--ink-ballpoint)/70 hover:text-(--ink-black) duration-300 ease-in text-(--pencil-light) secondary-font sketch'
                            key={data}>
                            {data}
                        </span>
                    })}
                </div>
                <div className="flex flex-wrap gap-2">
                    <div>What i focus on</div>
                    {
                        portfolioData.skills.softSkills.map(data => <span key={data}
                            className="px-2 bg-(--ink-ballpoint)
                          hover:bg-(--ink-ballpoint)/70 hover:text-(--ink-black) duration-300 ease-in
                          text-(--pencil-light) secondary-font sketch">
                            {data}
                        </span>)
                    }
                </div>
            </div>
        </section>
    )
}