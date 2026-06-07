export function RenderHeroSection() {
    return (
        <main className="flex flex-col justify-center px-4 py-2 text-(--pencil-heavy)">
            <h1>
                Hey there! I am Bijay
            </h1>
            <div>A Frontend Developer</div>
            <div>I turn my code editor into a canvas — building websites that actually have personality.</div>
            <div className="flex gap-4">
                <a href="#projects">View my work</a>
                <a href="#contacts">Contact me</a>
            </div>
        </main>
    )
}
