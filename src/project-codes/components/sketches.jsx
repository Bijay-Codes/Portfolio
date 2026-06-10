import { portfolioData } from "../Data/portfolio-data";
export function RenderSketches() {
    return (
        <section className="p-2 mb-15">
            <h1 className="text-3xl primary-font text-(--pencil-black) mb-6">My Sketches</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 px-4">
                {portfolioData.sketches.map((sketch, i) => {
                    return (
                        <img key={i}
                            loading="lazy"
                            className="object-fill rounded-lg"
                            src={sketch.path}
                            alt={sketch.name}
                        />
                    )
                })}
            </div>
        </section>
    )
}