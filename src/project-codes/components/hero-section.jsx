export function RenderHeroSection() {
    return (
        <main className="flex flex-col justify-center px-4 py-2 gap-2 text-(--ink-brush)
        tracking-widest">
            <h1 className="primary-font">
                Hey there! I am Bijay
            </h1>
            <div className="primary-font ml-3">A Frontend Developer</div>
            <div className="secondary-font ml-2">I turn my code editor into a canvas — building websites that actually have personality.</div>
            <div className="flex gap-4 secondary-font">
                <a href="#projects" className="px-2 bg-(--pencil-dark) text-(--pencil-light) tracking-wide">View my work</a>
                <a href="#contacts" className="px-2 bg-(--pencil-dark) text-(--pencil-light) tracking-wide">Contact me</a>
            </div>
        </main>
    )
}
