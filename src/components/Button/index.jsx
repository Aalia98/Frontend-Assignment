

const Button = ({handleSubmit}) => {
  return (
    <>
    <div className="mt-4 w-1/4 flex justify-evenly ml-auto">
        <button className="text-slate-700 px-3 py-1 rounded-lg text-lg font-bold border border-slate-500">Cancel</button>
        <button className="bg-slate-700 px-3 py-1 rounded-lg text-lg text-white font-bold" type="submit" onClick={() => handleSubmit()}>Submit</button>
    </div>
    </>
  )
}

export default Button