import Group from "../Group";
import InputField from "../InputField";
import Select from "../Select";

const Preview = ({ jsonData }) => {
  
    return (
      <>
        <div className="bg-slate-400 w-1/2">
          {jsonData &&
            jsonData.map((data) => {
              if (data.uiType == "Input") {
                return (
                  <>
                    <InputField
                      label={data.label}
                      placeholder={data.placeholder}
                      required={data.validate.required}
                    />
                  </>
                );
              } else if (data.uiType == "Group") {
                return (
                  <>
                    <Group label={data.label} subParams={data.subParameters}/>
                  </>
                );
              } else if (data.uiType == "Select") {
                return (
                  <>
                    <Select
                      defaultValue={data.validate.defaultValue}
                      label={data.label}
                      options={data.validate.options}
                    />
                  </>
                );
              }
            })}
        </div>
      </>
    );
};

export default Preview;
