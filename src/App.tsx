import './App.css'
import Header from './components/Header'
import ContentCard from './components/ContentCard'
import PcData from './data/PcComponentes.json'

function App() {

  const sections = PcData.sections
  const sectionKeys = Object.keys(sections) as Array<keyof typeof sections>

  return (
    <>
      <Header title="PcComponentes"/>

      {sectionKeys.map((key, index) => (
        <ContentCard key={index} type={key} name={sections[key]}/>
      ))}

    </>
  )
}

export default App
