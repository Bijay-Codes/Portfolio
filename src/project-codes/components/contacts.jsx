import { portfolioData } from "../Data/portfolio-data"
export function RenderContacts() {
    return (
        <div id="contacts" className="flex gap-4 flex-wrap
         py-6 secondary-font text-xl p-2
          bg-(--pencil-mid)/50 text-(--pencil-heavy) rounded-t-xl outline-1 outline(--ink-dark)/80 text-left md:text-center">
            <div className="text-3xl font-extralight primary-font">Want to work with me? —</div>
            <span className="font-extrabold primary-font text-3xl">Let's make something memorable.</span>
            <ul className="flex gap-4 flex-wrap">
                {portfolioData.contact.social.map(link => {
                    return <li key={link[0]}><a href={`mailto:${link[1]}`} target="_blank"
                        className="text-base border-2 border-(--ink-heavy) text-(--ink-heavy) px-4 py-1.5 rounded-sm
                        transition-all duration-200 tracking-wide
                        hover:bg-(--paper-bright)/80">
                        {link[0]}
                    </a>
                    </li>
                })}
            </ul>
        </div>
    )
}