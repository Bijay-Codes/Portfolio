import { portfolioData } from "../Data/portfolio-data"
export function RenderContacts() {
    return (
        <footer id="contacts" className="flex gap-2 flex-wrap secondary-font sm:text-2xl text-sm p-2 text-center">
            <div>Want to work with me? —</div>
            <div>Let's make something memorable.</div>
            <ul className="flex gap-4 flex-wrap">
                {portfolioData.contact.social.map(link => {
                    return <li key={link[0]}><a href={link[1]}
                        className="text-sm sm:text-xl bg-(--ink-ballpoint) px-2">{link[0]}</a></li>
                })}
            </ul>
        </footer>
    )
}