import { portfolioData } from "../Data/portfolio-data"
export function RenderContacts() {
    return (
        <footer id="contacts" className="flex gap-2">
            <div>Want to work with me? Lets talk —</div>
            <ul className="flex gap-4">
                {portfolioData.contact.social.map(link => {
                    return <li><a href={link[1]}>{link[0]}</a></li>
                })}
            </ul>
        </footer>
    )
}