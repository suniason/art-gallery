import FormButton from './input/formbutton'
import FormInput from './input/forminput'

const LoginForm = ({ handleLogin, credentials, setCredentials, loading }) => {
  return (
    <>
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
