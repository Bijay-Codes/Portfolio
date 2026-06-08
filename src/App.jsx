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
    <div className='flex flex-col gap-4 justify-center'>
      <RenderHeroSection />
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
