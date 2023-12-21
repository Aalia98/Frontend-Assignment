import { useState } from "react"
import Preview from "./components/Preview"
import TextArea from "./components/TextArea"


function App() {
  const [jsonData, setJsonData] = useState([])

const parseJson = data => {
  setJsonData(data)
}

  return (
    <>
      <div className="w-full flex">
        <TextArea  onJsonParse={parseJson}/>
        <Preview jsonData={jsonData}/>
      </div>
    </>
  )
}

export default App
