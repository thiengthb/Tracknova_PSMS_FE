import Logo from './components/header/Logo'
import LogoIcon from './assets/svgs/logo.svg'
function App() {

  return (
    <>
      <Logo icon={{src:LogoIcon, alt:"My Logo"}} text="Tracknova" />
    </>
  )
}

export default App
