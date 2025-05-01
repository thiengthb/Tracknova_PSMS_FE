import Logo from '../../components/header/Logo'
import Input from '../../components/body/Input'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen bg-[#005ACD]'>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="mt-[30px]">
          <Logo  />
        </div>
        <div className="w-ful h-[704px] p-[53px] flex bg-white justify-center rounded-t-[30px]">
          <form className="w-[309px]">
            <h1 className='text-[32px] font-bold mt-[10px] mb-[28px]'>Đăng nhập</h1>
            <div className="mb-[28px]">
              <Input type='text' placeHolder='Tai khoan'></Input>
            </div>
            <div className="mb-[24px]">
              <Input type='password' placeHolder='Mat khau'></Input>  
            </div>
            <div className="flex justify-between mb-[27px]">
              <div className="flex gap-[10px]">
                <input type="checkbox" id="remember-password"/>
                <label htmlFor="remember-password">Nhớ mật khẩu</label>
              </div>
              <a className='text-[#005ACD]'>Quên mật khẩu ?</a>
            </div>
            <button type='submit' className="w-full h-[55px] bg-[#0093CB] rounded-[20px] text-[20px] text-white font-bold">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
