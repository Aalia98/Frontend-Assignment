import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import Select from "../Select";

const Preview = ({ jsonData }) => {
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(document.getElementById("my-form"))
    let ans = {};
    data.forEach((value, key) => {ans[key]=value})
    setSubmittedData(ans)
  }

  const render = (data, group = false) => {
    switch (data.uiType) {
      case "Input":
        return (
          <>
            <InputField
             name={data.jsonKey}
              label={data.label}
              placeholder={data.placeholder}

              required={data.validate.required}
            />
          </>
        );
      case "Select":
        return (
          <>
            <Select
            name={data.jsonKey}
              defaultValue={data.validate.defaultValue}
              label={data.label}
              group={group ? true : false}
              options={data.validate.options}
            />
          </>
        );
      case "Group":
        return (
          <>
            <div className="w-full h-auto p-4 mt-5 bg-slate-50 flex flex-col justify-between border border-slate-200 rounded font-bold">
              <h1>
                {data.label}
                <span className="text-red-500">*</span>
              </h1>
              <div className="border border-slate-300 mt-4"></div>
              {data.subParameters.map((param) => render(param, true))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-1/2 h-auto">
      <h1 className="text-2xl font-bold text-center p-4 bg-slate-200">UI Schema Preview</h1>
      {jsonData.length > 0 && <div className="border-2 border-blue-600 rounded-lg p-4">
      <h1 className="font-bold text-lg">Create Pasta</h1>
      <div className="border border-slate-400 mt-4"></div>
        <form id="my-form" onSubmit={handleSubmit}>
        {jsonData.map((data) => render(data))}
        <div className="border border-slate-200 mt-4"></div>
        {jsonData.length > 0 && <Button handleSubmit={handleSubmit}/>}
        </form>
      </div>}
      {submittedData && JSON.stringify(submittedData)}
      </div>
    </>
  );
};

export default Preview;
