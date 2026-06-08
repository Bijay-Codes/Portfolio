export function RenderHeroSection() {
    return (
        <main className="flex flex-col justify-center p-4 gap-2 text-(--ink-brush)
        tracking-widest">
            <h1 className="primary-font text-6xl
             underline-(--ink-fineliner) underline underline-offset-4">
                Hey there! I am <span className="text-(--ink-fineliner)">B</span>ijay
            </h1>
            <div className="primary-font text-(--pencil-heavy) ml-3 text-3xl">A Frontend Developer ⭔ Open to work</div>
            <div className="secondary-font text-(--pencil-heavy) ml-2 text-xl">
                I turn my code editor into a canvas — building websites that actually have personality.
            </div>
            <div className="flex gap-4 secondary-font text-xl">
                <a href="#projects" className="px-2 bg-(--pencil-dark) text-(--pencil-light) tracking-wide">View my work</a>
                <a href="#contacts" className="px-2 bg-(--pencil-dark) text-(--pencil-light) tracking-wide">Get in touch</a>
            </div>
        </main>
    )
}
