


const InputField = ({label, placeholder , required, name}) => {
  return (
    <div className="w-full h-auto p-4 mt-5 bg-slate-50 flex justify-between rounded border border-slate-200 font-bold">
        <label className="mt-1">{label}<span className="text-red-500">*</span></label>
        <input name={name} className="px-2 py-1 w-1/2 rounded bg-slate-100 border border-slate-300 outline-none placeholder:text-sky-700" type="text" placeholder={placeholder} required={required}/>
    </div>
  )
}

export default InputField