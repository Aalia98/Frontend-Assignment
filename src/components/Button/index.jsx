

const Button = ({handleSubmit}) => {
  return (
    <>
    <div>
        <button>Cancel</button>
        <button type="submit" onClick={() => handleSubmit()}>Submit</button>
    </div>
    </>
  )
}

export default Button