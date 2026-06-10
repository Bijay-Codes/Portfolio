export function RenderHeroSection() {
    return (
        <main className="flex flex-col z-10 justify-center p-4 gap-2 text-(--ink-brush)">
            <h1 className="primary-font text-6xl
             underline-(--ink-fineliner) underline underline-offset-4">
                Hey there! I am <span className="text-(--ink-fineliner)">B</span>ijay
            </h1>
            <div className="primary-font text-(--pencil-heavy) ml-3 text-2xl">A Frontend Developer ⭔ Open to work</div>
            <div className="secondary-font text-(--pencil-heavy) ml-2 text-base">
                I turn my code editor into a canvas — building websites that actually have personality.
            </div>
            <div className="flex gap-4 secondary-font text-base">
                <a href="#projects" className="hover:text-black hover:bg-(--paper-bright)/30 duration-300 ease-in-out sketch px-2 bg-(--pencil-dark) text-(--pencil-light) tracking-wide whitespace-nowrap">View my work</a>
                <a href="#contacts" className="hover:text-black hover:bg-(--paper-bright)/30 duration-300 ease-in-out sketch px-2 bg-(--pencil-dark) text-(--pencil-light) tracking-wide whitespace-nowrap">Get in touch</a>
            </div>
        </main>
    )
}
