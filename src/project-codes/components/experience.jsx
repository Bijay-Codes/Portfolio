import { portfolioData } from "../Data/portfolio-data"
export function RenderExperience() {
    return (
        <section className="ml-2 px-2 py-3 secondary-font flex flex-col text-(--ink-brush)">
            <h2 className="primary-font text-(--ink-black)">Training and Experience —</h2>
            <div className="ml-3 m-2">
                <div className="flex gap-2 flex-wrap">
                    <span>Place : </span>
                    <span>
                        {portfolioData.training.place}
                    </span>
                    <span>Duration : </span>
                    <span>{portfolioData.training.duration}</span>
                    <div>{portfolioData.training.type}</div>
                </div>
                <h3 className="primary-font text-sm">What i did there? — </h3>
                <div className="ml-2">{portfolioData.training.description}</div>
            </div>
        </section >
    )
}