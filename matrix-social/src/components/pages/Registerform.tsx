export default function RegisterForm() {
  return (
    <form action="">
      <label htmlFor="username">Username</label><br/><br/>
      <input type="text" name='username'/><br/>
      <label htmlFor="email">Email</label><br/><br/>
      <input type="text" name='email'/><br/>
      <label htmlFor="password">Password</label><br/><br/>
      <input type="text" name='password'/><br/>
      <label htmlFor="first-name">First Name</label><br/><br/>
      <input type="text" name='first-name'/><br/>
      <label htmlFor="last-name">LastName</label><br/><br/>
      <input type="text" name='last-name'/><br/><br/>
      <input type="submit" value='Register' />
    </form>
  );
}