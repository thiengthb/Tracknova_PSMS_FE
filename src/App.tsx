import Button from './components/body/Button'
import Navbar from './components/footer/Navbar'
import Tabbar from './components/header/Tabbar'
import Card from './components/body/Card'
import {cardImgs} from './helpers/HCard-img'
import DebtOrderItem from './components/body/CDebtOrderItem'
import ProductInOrder from './components/body/CProductInOrder'
import InvoiceItem from './components/body/CInvoiceItem'
import CCompanyAndCateItem from './components/body/CCompanyAndCateItem'
import CProductItem from './components/body/CProductItem'
import COrderItem from './components/body/COrderItem'
import CCustomerItem from './components/body/CCustomerItem'
import EraseTag from './components/body/EraseTag'
import Logo from './components/header/Logo'
function App() {
  const debtchildren = <DebtOrderItem title='5 hộp x, 10 lọ y, 3 chiếc z' debt='50.000'></DebtOrderItem>
  const ProductInOrderchildren = <ProductInOrder title='San pham' price= {50000} amount={1} ></ProductInOrder> 
  const ProductInOrderchildren2 = <ProductInOrder title='San pham' price= {50000} amount={1} edit = {true}></ProductInOrder>  
  const Inovicechildren = <InvoiceItem title='Nguyen Van A' debt={50000}></InvoiceItem>
  const Inovicechildren2 = <InvoiceItem title='Khach ban le' ></InvoiceItem>
  const cateChildren = <CCompanyAndCateItem title='Danh mục A' numberOfProduct={10}></CCompanyAndCateItem>
  const cateChildren2 = <CCompanyAndCateItem title='Công ty A' numberOfProduct={10}></CCompanyAndCateItem>
  const productChilder = <CProductItem title='Sản phẩm' price={50000} inventory={10}></CProductItem>
  const orderChildren = <COrderItem title='Đơn hàng' customer='Nguyễn Văn A' customerAddress='Nhá số x,...' customerProduct={5}></COrderItem>
  const customer = <CCustomerItem customerTitle='Nguyen Van A' phone='096504322' address='Nha so x, thon n,...'></CCustomerItem>

  return (
    <>
      <Button path='/' text='Thêm' bgColor='bg-[#BEF0FF]' focus="focus:bg-[#0093CB]  focus:text-white" className='p-4 w-[160px] h-[70px] rounded-[20px] font-bold text-[20px] font-montserrat'></Button>
      <Button path='/' text='Xóa' bgColor='bg-[#F9B294]' focus="focus:bg-[#E8754C]" textColor="text-white" className='p-4 w-[160px] h-[70px] rounded-[20px] font-bold text-[20px] font-montserrat'></Button>
      <Logo></Logo>
      <Navbar></Navbar>
      <Tabbar className=" text-[16px] font-opensans" contents={[{ text: "Sản phẩm", path: 'product' }, { text: "Công ty", path: 'company' }, { text: "Danh mục", path: 'category' }]}></Tabbar>

      <div className="mt-5">
        <Tabbar className=" text-[16px] font-opensans" contents={[{ text: "Hôm nay", path: 'today' }, { text: "Lịch sử", path: 'past' }]}></Tabbar>
      </div>


      <div className="mt-5">
        <Card img={{src:cardImgs.order.src, alt: cardImgs.order.alt}} children={debtchildren}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-tl-[15px] rounded-bl-[15px]' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.productInOrder.src, alt: cardImgs.productInOrder.alt}} children={ProductInOrderchildren}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-tl-[15px] rounded-bl-[15px]' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.productInOrder.src, alt: cardImgs.productInOrder.alt}} children={ProductInOrderchildren2}></Card>
      </div>
      

      <div className="mt-5">
        <Card imgRound=' rounded-full' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.cusAvt.src, alt: cardImgs.cusAvt.alt}} children={Inovicechildren}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-full' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.cusAvt.src, alt: cardImgs.cusAvt.alt}} children={Inovicechildren2 }></Card>
      </div>


      <div className="mt-5">
        <Card img={{src:cardImgs.cateImg.src, alt: cardImgs.cateImg.alt}} children={cateChildren}></Card>
      </div>

      <div className="mt-5">
        <Card img={{src:cardImgs.cateImg.src, alt: cardImgs.cateImg.alt}} children={cateChildren2}></Card>
      </div>

      <div className="mt-5">
        <Card img={{src:cardImgs.productImg.src, alt: cardImgs.productImg.alt}} children={productChilder}></Card>
      </div>

      <div className="mt-5">
        <Card img={{src:cardImgs.order.src, alt: cardImgs.order.alt}} children={orderChildren}></Card>
      </div>

      <div className="mt-5">
        <Card imgRound=' rounded-full' imgBg = "bg-[#D9D9D9]" img={{src:cardImgs.cusAvt.src, alt: cardImgs.cusAvt.alt}} children={customer}></Card>
      </div>

      <div className="mt-5">
        <EraseTag></EraseTag>
      </div>
    </>
  )
}

export default App
