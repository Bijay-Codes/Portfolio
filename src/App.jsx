import './App.css'
import { RenderHeroSection } from './project-codes/components/hero-section';
import { RenderAboutSection } from './project-codes/components/about-section';
import { RenderSkills } from './project-codes/components/skills';
import { RenderProjects } from './project-codes/components/projects';
import { RenderExperience } from './project-codes/components/experience';
import { RenderContacts } from './project-codes/components/contacts';
function App() {
  return (
    <div>
      <RenderHeroSection />
      <RenderAboutSection />
      <RenderSkills />
      <RenderProjects />
      <RenderExperience />
      <RenderContacts />
    </div>
  )
}

export default App
