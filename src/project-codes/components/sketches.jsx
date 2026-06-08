import { portfolioData } from "../Data/portfolio-data";
export function RenderSketches() {
    return (
        <section className="ml-4">
            <h1 className="text-3xl primary-font text-(--pencil-black) mb-6">My Sketches</h1>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-4">
                {portfolioData.sketches.map(sketch => {
                    return (
                        <div
                            key={sketch.name}
                            className="w-full aspect-square p-4
                              bg-none overflow-hidden flex items-center justify-center
                              border-l-4 border-r-4 border-2 border-(--ink-ballpoint)/5"
                        >
                            <img
                                className="max-w-full max-h-full object-contain border border-(--pencil-dark) hover:border-(--ink-fineliner) hover:border-2 rounded-xl"
                                src={sketch.path}
                                alt={sketch.name}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}