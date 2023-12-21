import { useState } from "react"
import Preview from "./components/Preview"
import TextArea from "./components/TextArea"
import Button from "./components/Button"


function App() {
  const [jsonData, setJsonData] = useState([])

const parseJson = data => {
  setJsonData(data)
}

  return (
    <>
      <div className="w-full h-screen flex">
        <TextArea  onJsonParse={parseJson}/>
        <Preview jsonData={jsonData}/>
      </div>
      <Button/>
    </>
  )
}

export default App
