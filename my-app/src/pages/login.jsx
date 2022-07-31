// import {  Button } from '../components/Button'
import { Input, Form } from '../components/Input'
import * as validators from '../components/validators'

export default function Login() {
  function onSubmit({ username, password }) {
    console.log({
      username,
      password,
    })
  }

  return (
    <>
      
      <div className=" grid place-content-center flex-1">
        <div className="bg-white w-96 rounded-md p-4">
          <h1 className="text-center text-xl font-semibold pb-10 font-tt">
            LOGIN
          </h1>

          <Form className="grid gap-4" onSubmit={onSubmit}>
            <Input
              name="username"
              label="Username"
              placeholder="Username"
              validations={[validators.required]}
            />
            <Input
              name="password"
              label="Password"
              placeholder="Password"
              validations={[validators.required]}
              type="password"
            />
          </Form>
        </div>
        <div className="card">
          <div className="card-body"></div>
        </div>
      </div>
    </>
  )
}
