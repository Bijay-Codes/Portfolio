export function RenderAboutSection() {
    return (
        <section className="secondary-font text-(--ink-brush) p-4">
            <h2 className="primary-font text-(--ink-black) text-4xl">About me —</h2>
            <div className="text-base text-(--pencil-dark) flex flex-col gap-2 max-w-250">
                <p>I'm a self-taught frontend developer who learned to code solo. When I lock in, nothing else exists — no distractions, no excuses, just code until it works.</p>
                <p>I don't build boring projects. I add mechanics that matter — a berry-feeding system for favorites, a roasting engine for behavioral patterns, 24-hour edit locks. I create things that show how I think and are cool to build.</p>
                <p>I want my work to stand out, and it does.</p>
            </div>
        </section>
    )
}