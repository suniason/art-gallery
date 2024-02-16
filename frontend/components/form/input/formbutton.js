const FormButton = ({
  handleClick,
  name,
  primary = true,
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <button
      disabled={isDisabled || isLoading}
      onClick={handleClick}
      className={`${
        primary ? 'bg-accent text-primary' : ' bg-background'
      }  px-7 py-1 font-semibold border border-1 border-accent m-1 uppercase text-center rounded-md`}
    >
      {name}
    </button>
  )
}

export default FormButton
