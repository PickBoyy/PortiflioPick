import './App.css'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MySkills } from './components/MySkills'
import { MyProjects } from './components/Projects'

function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>
      <AboutMe/>
      <MySkills/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
 