import FormTextArea from './input/formtextarea'
import FormButton from './input/formbutton'
import Image from 'next/image'

const EditArtworkForm = ({
  credentials,
  setCredentials,
  isDisabled,
  handleEdit,
  handleCancel,
  handleSave,
  handleDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center">
          {(credentials.image !== null || credentials.image !== undefined) && (
            <div className="p-5 relative w-60 h-60 overflow-hidden flex justify-center items-center">
              <Image
                className="w-60"
                src={credentials?.image}
                alt={credentials?.name}
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
        <div>
          <div className="mx-2 my-4 text-2xl font-bold">{credentials.name}</div>
          <FormTextArea
            value={credentials}
            setValue={setCredentials}
            token="description"
            name="Description"
            isDisabled={isDisabled}
          />
        </div>
      </div>
      <div>
        {isDisabled ? (
          <>
            <FormButton handleClick={handleEdit} name={'Edit'} />
            <FormButton
              handleClick={handleDelete}
              name={'Delete'}
              primary={false}
            />
          </>
        ) : (
          <>
            <FormButton handleClick={handleCancel} name={'Cancel'} />
            <FormButton
              handleClick={handleSave}
              name={'Save'}
              primary={false}
            />
          </>
        )}
      </div>
    </>
  )
}

export default EditArtworkForm
