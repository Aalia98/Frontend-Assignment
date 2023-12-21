import { useState } from "react";

const TextArea = ({ onJsonParse }) => {
  const [json, setJson] = useState("");

  const handleChangeText = (e) => {
    setJson(e.target.value)
  }

  const parseJson = () => {
     try {
      const parsedJsonData = JSON.parse(json)
     onJsonParse(parsedJsonData)
     } catch (error) {
      window.alert(`Please write valid JSON: ${error.message}`)
     }
  }

  return (
    <>
      <div className="bg-slate-200 w-1/2">
        <h1>UI Schema Textarea</h1>
        <button onClick={parseJson}>Render UI</button>
        <textarea className="w-full" name="w3review" rows="50" cols="50" onChange={handleChangeText} value={json}/>
      </div>
    </>
  );
};

export default TextArea;
