import Logo from './components/header/Logo'
import LogoIcon from './assets/svgs/logo.svg'
import Button from './components/body/Button'
import Navbar from './components/footer/Navbar'
import Tabbar from './components/header/Tabbar'
function App() {

  return (
    <>
      <Logo icon={{ src: LogoIcon, alt: "My Logo" }} text="Tracknova" />
      <Button path='/' text='Thêm' bgColor='bg-[#BEF0FF]' focus="focus:bg-[#0093CB]  focus:text-white" className='p-4 w-[160px] h-[70px] rounded-[20px] font-bold text-[20px] font-montserrat'></Button>
      <Button path='/' text='Xóa' bgColor='bg-[#F9B294]' focus="focus:bg-[#E8754C]" textColor="text-white" className='p-4 w-[160px] h-[70px] rounded-[20px] font-bold text-[20px] font-montserrat'></Button>

      <Navbar></Navbar>
      <Tabbar className=" text-[16px] font-opensans" contents={[{ text: "Sản phẩm", path: 'product' }, { text: "Công ty", path: 'company' }, { text: "Danh mục", path: 'category' }]}></Tabbar>

      <div className="mt-5">
        <Tabbar className=" text-[16px] font-opensans" contents={[{ text: "Hôm nay", path: 'today' }, { text: "Lịch sử", path: 'past' }]}></Tabbar>
      </div>
    </>
  )
}

export default App
