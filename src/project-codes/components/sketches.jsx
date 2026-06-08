import { portfolioData } from "../Data/portfolio-data";
export function RenderSketches() {
    return (
        <section className="ml-4">
            <h1 className="text-3xl primary-font text-(--pencil-black)">My Sketches</h1>
            <div className="grid grid-cols-3 m-auto gap-4 w-fit p-4">
                {portfolioData.sketches.map(sketch => {
                    return <img
                        className="border-(--ink-ballpoint) border object-cover object-center aspect-square"
                        src={sketch.path} alt={sketch.name} />
                })}
            </div>
        </section>
    )
}