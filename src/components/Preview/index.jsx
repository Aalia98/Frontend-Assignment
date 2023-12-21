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

  const render = (data) => {
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
              options={data.validate.options}
            />
          </>
        );
      case "Group":
        return (
          <>
            <div className="w-full h-auto p-4 mt-5 bg-slate-50 flex flex-col justify-between rounded border border-slate-200 font-bold">
              <h1>
                {data.label}
                <span className="text-red-500">*</span>
              </h1>
              <div className="border border-slate-300 mt-4"></div>
              {data.subParameters.map((param) => render(param))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-1/2 h-auto p-4">
        <form id="my-form" onSubmit={handleSubmit}>
        {jsonData.map((data) => render(data))}
        {jsonData.length > 0 && <Button handleSubmit={handleSubmit}/>}
        </form>
        {submittedData && JSON.stringify(submittedData)}
      </div>
    </>
  );
};

export default Preview;
