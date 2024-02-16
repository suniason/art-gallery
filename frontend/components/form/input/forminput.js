const FormInput = ({
  type = 'text',
  value,
  setValue,
  token,
  name,
  isDisabled = false,
  isPrimary = true,
}) => {
  return (
    <div className="mx-8 my-4">
      <div className=" text-lg font-semibold">{name}</div>
      <input
        disabled={isDisabled}
        type={type}
        value={value[token]}
        onChange={(e) => setValue({ ...value, [token]: e.target.value })}
        className="border-b border-accent w-full py-1 px-2 focus:outline-none bg-transparent"
      />
    </div>
  )
}

export default FormInput
