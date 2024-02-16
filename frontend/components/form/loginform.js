import FormButton from './input/formbutton'
import FormInput from './input/forminput'

const LoginForm = ({ handleLogin, credentials, setCredentials, loading }) => {
  return (
    <>
      <div className="my-10">
        <FormInput
          value={credentials}
          setValue={setCredentials}
          token="email"
          name="E-mail"
          type="email"
        />
      </div>

      <div className="my-10">
        <FormInput
          value={credentials}
          setValue={setCredentials}
          token="password"
          name="Password"
          type="password"
        />
      </div>
      <div className="my-10">
        <FormButton
          handleClick={handleLogin}
          name="Login"
          isLoading={loading}
        />
      </div>
    </>
  )
}

export default LoginForm
