const FormTextArea = ({ value, setValue, token, name, isDisabled = false }) => {
  return (
    <div className="mx-8 my-4">
      <div className="my-2 text-lg font-semibold">{name}</div>
      <textarea
        onChange={(e) => setValue({ ...value, [token]: e.target.value })}
        rows={6}
        value={value[token]}
        disabled={isDisabled}
        style={{ resize: 'none' }}
        className={`${
          isDisabled ? 'bg-transparent' : 'border border-accent bg-background'
        }  w-full py-1 px-2 focus:outline-none my-2  rounded-md`}
      ></textarea>
    </div>
  )
}

export default FormTextArea
