import Logo, { LogoTemplate } from './components/header/Logo'
import LogoIcon from './assets/svgs/logo.svg'
import Button from './components/body/Button'
import Navbar from './components/footer/Navbar'
import Tabbar from './components/header/Tabbar'
import Input from './components/body/Input'
import Card from './components/body/Card'
import {cardImgs} from './helpers/HCard-img'
import DebtOrderItem from './components/body/DebtOrderItem'
import ProductInOrder from './components/body/ProductInOrder'
import InvoiceItem from './components/body/InvoiceItem'

function App() {
  const debtchild = <DebtOrderItem title='5 hộp x, 10 lọ y, 3 chiếc z' debt='50.000'></DebtOrderItem>
  const ProductInOrderChild = <ProductInOrder title='San pham' price= {50000} amount={1} ></ProductInOrder> 
  const ProductInOrderChild2 = <ProductInOrder title='San pham' price= {50000} amount={1} edit = {true}></ProductInOrder>  
  const InoviceChild = <InvoiceItem title='Nguyen Van A' debt={50000}></InvoiceItem>
  const InoviceChild2 = <InvoiceItem title='Khach ban le' ></InvoiceItem>

  
  return (
    <>
      <LogoTemplate icon={{ src: LogoIcon, alt: "My Logo" }} text="Tracknova" />
      <Button path='/' text='Thêm' bgColor='bg-[#BEF0FF]' focus="focus:bg-[#0093CB]  focus:text-white" className='p-4 w-[160px] h-[70px] rounded-[20px] font-bold text-[20px] font-montserrat'></Button>
      <Button path='/' text='Xóa' bgColor='bg-[#F9B294]' focus="focus:bg-[#E8754C]" textColor="text-white" className='p-4 w-[160px] h-[70px] rounded-[20px] font-bold text-[20px] font-montserrat'></Button>

      <Navbar></Navbar>
      <Tabbar className=" text-[16px] font-opensans" contents={[{ text: "Sản phẩm", path: 'product' }, { text: "Công ty", path: 'company' }, { text: "Danh mục", path: 'category' }]}></Tabbar>

      <div className="mt-5">
        <Tabbar className=" text-[16px] font-opensans" contents={[{ text: "Hôm nay", path: 'today' }, { text: "Lịch sử", path: 'past' }]}></Tabbar>
      </div>
      <div className="mt-5">
      <Input type='text' placeHolder='Tim'></Input>
      </div>

      <div className="mt-5">
        <Input type='password' placeHolder='Mat khau'></Input>
      </div>

      <div className="mt-5">
        <Card img={{src:cardImgs.product.src, alt: cardImgs.product.alt}} child={debtchild}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-tl-[15px] rounded-bl-[15px]' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.productInOrder.src, alt: cardImgs.productInOrder.alt}} child={ProductInOrderChild}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-tl-[15px] rounded-bl-[15px]' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.productInOrder.src, alt: cardImgs.productInOrder.alt}} child={ProductInOrderChild2}></Card>
      </div>
      

      <div className="mt-5">
        <Card imgRound=' rounded-full' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.cusAvt.src, alt: cardImgs.cusAvt.alt}} child={InoviceChild}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-full' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.cusAvt.src, alt: cardImgs.cusAvt.alt}} child={InoviceChild2 }></Card>
      </div>
    </>
  )
}

export default App
