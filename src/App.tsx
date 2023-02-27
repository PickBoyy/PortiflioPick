import './App.css'
import { AboutMe } from './components/AboutMe'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { MySkills } from './components/MySkills'

function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>
      <AboutMe/>
      <MySkills/>
    </div>
  )
}

export default App
 