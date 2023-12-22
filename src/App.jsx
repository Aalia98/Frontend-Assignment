import { useState } from "react"
import Preview from "./components/Preview"
import TextArea from "./components/TextArea"


function App() {
  const [jsonData, setJsonData] = useState([])

const parseJson = data => {

  setJsonData(data.sort((a,b) => a.sort > b.sort ? 1 : -1))
}

  return (
    <>
      <div className="w-full h-screen flex">
        <TextArea  onJsonParse={parseJson}/>
        <Preview jsonData={jsonData}/>
      </div>
    </>
  )
}

export default App
