import Image from 'next/image'
import FormInput from './input/forminput'
import FormTextArea from './input/formtextarea'
import FormUploadButton from './input/formuploadbutton'
import FormButton from './input/formbutton'

const EditProfileForm = ({
  credentials,
  setCredentials,
  isDisabled,
  handleEdit,
  handleCancel,
  handleSave,
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col items-center">
        {(credentials.photo !== null || credentials.photo !== undefined) && (
          <div className="p-5 relative w-60 h-60 overflow-hidden flex justify-center items-center rounded-full bg-black">
            <Image
              className="w-60"
              src={credentials?.photo}
              alt={credentials?.name}
              width={200}
              height={200}
            />
          </div>
        )}
        {!isDisabled && (
          <div className="mx-8 my-4 w-full">
            <FormUploadButton
              value={credentials}
              setValue={setCredentials}
              token="photo"
              endpointname="artworkImage"
            />
          </div>
        )}
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2">
          <div>
            <FormInput
              value={credentials}
              setValue={setCredentials}
              token="name"
              name="Name"
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <FormInput
              value={credentials}
              setValue={setCredentials}
              token="username"
              name="Username"
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <FormInput
              value={credentials}
              setValue={setCredentials}
              token="email"
              name="E-mail"
              type="email"
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <FormInput
              value={credentials}
              setValue={setCredentials}
              token="contact"
              name="Phone Number"
              type="tel"
              isDisabled={isDisabled}
            />
          </div>
          <div className="col-span-2">
            <FormTextArea
              value={credentials}
              setValue={setCredentials}
              token="profile"
              name="Profile"
              isDisabled={isDisabled}
            />
          </div>
        </div>
      </div>
      <div>
        {isDisabled ? (
          <FormButton handleClick={handleEdit} name={'Edit'} />
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
    </div>
  )
}

export default EditProfileForm
