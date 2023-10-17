import { useRef, FormEvent } from 'react'

type User = {
  username: string
  password: string
  email: string
  first_name?: string
  last_name?: string
}

export default function RegisterForm() {
  
  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const fNameField = useRef<HTMLInputElement>(null)
  const lNameField = useRef<HTMLInputElement>(null)
  
  async function handleRegisterData(e:FormEvent<H){
    e.preventDefault()
    e.preventDefault()
    const user: User = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
      email: emailField.current!.value,
    }
    if (fNameField.current!.value) {
      user.first_name = fNameField.current?.value
    }
    if (lNameField.current!.value) {
      user.last_name = lNameField.current?.value
    }
    await registerUser(user)
  }

  async function registerUser(user: User){
    const res = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    if(!res.ok){ 
      window.alert('Register Failed')
    }
    const data = await res.json()
    console.log(data)
  }  

  return (
    <form onSubmit={handleRegisterData}>
      <label htmlFor="username">Username</label><br/>
      <input type="text" name='username' ref={usernameField} required/><br/>
      <label htmlFor="email">Email</label><br/>
      <input type="text" name='email' ref={emailField} required/><br/>
      <label htmlFor="password">Password</label><br/>
      <input type="password" name='password' ref={passwordField} required/><br/>
      <label htmlFor="first-name">First Name</label><br/>
      <input type="text" name='first-name' ref={fNameField}/><br/>
      <label htmlFor="last-name">LastName</label><br/>
      <input type="text" name='last-name' ref={lNameField}/><br/>
      <input type="submit" value='Register' />
    </form>
  );
}
