
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'

function App() {

  const handleSignUpSubmit = data => {
    // e.preventDefault();
    console.log('Sign Up', data)
  }
  const handleUpdateSubmit = data => {
    console.log('Updata Profile,', data);
  }


  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm>
      <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm handleSubmit={handleSignUpSubmit} formTitle={'Log in'}><div> <h2>Sigh Up</h2>
        <p>Please Sign up right now</p></div></ReusableForm>
      <ReusableForm handleSubmit={handleUpdateSubmit} formTitle={'Profile Update'} submitBtnText={'Update'}>
        <div><h2>Profile Update</h2>
          <p>Always keep your profile updated</p></div>
      </ReusableForm>
    </>
  )
}

export default App
