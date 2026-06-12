import './App.css'
import { RenderHeroSection } from './project-codes/components/hero-section';
import { RenderAboutSection } from './project-codes/components/about-section';
import { RenderSkills } from './project-codes/components/skills';
import { RenderProjects } from './project-codes/components/projects';
import { RenderExperience } from './project-codes/components/experience';
import { RenderContacts } from './project-codes/components/contacts';
import { RenderSketches } from './project-codes/components/sketches';
function App() {
  return (
    <div className='flex flex-col gap-4 justify-center relative overflow-hidden'>
      <a
        href="/Bijay-frontend.pdf"
        download='Bijay_resume.pdf'
        className="fixed bottom-3 right-3 z-50 
        bg-(--ink-fineliner) rounded-full p-4 outline-1 outline-(--ink-dark) flex justify-center items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
        CV
      </a>
      <RenderHeroSection />
      <img
        src="public/assets/itachi.webp"
        className='nooutline rotate-30 backdrop-opacity-60 z-0 absolute left-1/2 top-0 mask-b-from-24'
        width={300}
        alt="itachi" />
      <RenderAboutSection />
      <RenderSkills />
      <RenderProjects />
      <RenderExperience />
      <RenderSketches />
      <RenderContacts />
    </div>
  )
}

export default App
