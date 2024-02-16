import Image from 'next/image'
import FormButton from './input/formbutton'
import FormInput from './input/forminput'
import FormTextArea from './input/formtextarea'
import FormUploadDropzone from './input/formuploaddropzone'

const RegisterForm = ({
  handleRegister,
  credentials,
  setCredentials,
  loading,
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="row-span-2">
        <div>
          <FormInput
            value={credentials}
            setValue={setCredentials}
            token="name"
            name="Name"
          />
        </div>
        <div>
          <FormInput
            value={credentials}
            setValue={setCredentials}
            token="username"
            name="Username"
          />
        </div>
        <div>
          <FormInput
            value={credentials}
            setValue={setCredentials}
            token="email"
            name="E-mail"
            type="email"
          />
        </div>
        <div>
          <FormInput
            value={credentials}
            setValue={setCredentials}
            token="password"
            name="Password"
            type="password"
          />
        </div>
        <div>
          <FormInput
            value={credentials}
            setValue={setCredentials}
            token="contact"
            name="Phone Number"
            type="tel"
          />
        </div>
      </div>
      <div className="col-span-2">
        <FormTextArea
          value={credentials}
          setValue={setCredentials}
          token="profile"
          name="Tell us about yourself"
        />
      </div>
      <div>
        <FormUploadDropzone
          value={credentials}
          setValue={setCredentials}
          token="photo"
          endpointname="profilePhoto"
        />
      </div>
      <div className="flex items-center justify-center">
        {credentials.photo === '' ? (
          <div className="w-48 h-48 outline outline-1 rounded-lg flex items-center justify-center">
            Image Preview Here
          </div>
        ) : (
          <div className="flex items-center justify-center w-48 h-48 overflow-hidden outline outline-1 rounded-lg ">
            <Image
              src={credentials.photo}
              alt="Image Uploaded"
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
      <div>
        <FormButton
          handleClick={handleRegister}
          name={'Register'}
          loading={loading}
          isDisabled={loading}
        />
      </div>
    </div>
  )
}

export default RegisterForm
