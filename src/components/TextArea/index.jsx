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
      <div className="bg-slate-200 w-1/2 h-full">
        <div className="flex justify-between p-4">
        <h1 className="text-2xl font-bold">UI Schema Textarea</h1>
        <button className="text-white bg-slate-700 px-3 py-1 rounded-lg text-lg hover:bg-slate-600" onClick={parseJson}>Render UI</button>
        </div>
        <textarea className="w-full border border-slate-500 outline-none" name="w3review" rows="36" cols="50" onChange={handleChangeText} value={json}/>
      </div>
    </>
  );
};

export default TextArea;
