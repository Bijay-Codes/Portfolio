export function RenderAboutSection() {
    return (
        <section className="secondary-font text-(--ink-brush) p-4">
            <h2 className="primary-font text-(--ink-black) text-4xl">About me —</h2>
            <div className="text-base text-(--pencil-dark) flex flex-col gap-2 max-w-250">
                <p>I like to observe how things work whether it's animals, systems, behavior. Not up close, from a distance. That same curiosity pulled me into coding on my own.</p>
                <p>Planning to learn <b className="text-(--ink-ballpoint)">TypeScript</b> in future. My long term goal is to be a <b className="text-(--ink-ballpoint)">Full Stack Developer</b>.</p>
                <p>Anime person, used to sketch. Two modes—pencil or keyboard using both to create memorable things. Open to work, fresher, fast learner.</p>
            </div>
        </section>
    )
}