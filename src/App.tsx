import './App.css'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Content } from './components/Content'
import { Baseboard } from './components/Baseboard'
import { Header } from './components/Header'
import { MySkills } from './components/MySkills'
import { MyProjects } from './components/Projects'
import { Certificates } from './components/Certificados'

function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>
      <hr className='myHr' />
      <AboutMe/>
      <hr className='myHr' />
      <Certificates/>
      <hr className='myHr' />
      <MySkills/>
      <hr className='myHr' />
      <MyProjects/>
      <hr className='myHr' />
      <Contact/>
      <Baseboard/>

    </div>
  )
}

export default App
 