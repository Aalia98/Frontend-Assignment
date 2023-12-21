import Preview from "../Preview"

const Group = ({label, subParams}) => {
  return (
    <>
    <div>
      <h1>{label}</h1>
      <Preview jsonData={subParams}/>
    </div>
    </>
  )
}

export default Group