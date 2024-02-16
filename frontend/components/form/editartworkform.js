import FormTextArea from './input/formtextarea'
import FormButton from './input/formbutton'

const EditProfileForm = ({
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
      <div className="flex flex-col items-center">
        <div>
          <FormTextArea
            value={credentials}
            setValue={setCredentials}
            token="profile"
            name="Profile"
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

export default EditProfileForm
