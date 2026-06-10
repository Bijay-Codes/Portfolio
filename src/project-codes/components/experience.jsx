import { portfolioData } from "../Data/portfolio-data"
export function RenderExperience() {
    return (
        <section className="p-4 secondary-font flex flex-col text-(--ink-brush) text-xl">
            <h2 className="primary-font text-(--ink-black) text-3xl">Training and Experience —</h2>
            <div>
                <div>
                    <span>Place : </span>
                    <span className="text-(--ink-fineliner)">
                        {portfolioData.training.place}
                    </span> <br />
                    <span>Duration : </span>
                    <span>{portfolioData.training.duration}</span>
                    <div>{portfolioData.training.type}</div>
                </div>
                <h3 className="primary-font text-2xl">What i did there? </h3>
                <p className="max-w-250">
                    {portfolioData.training.description}
                </p>
            </div>
        </section >
    )
}