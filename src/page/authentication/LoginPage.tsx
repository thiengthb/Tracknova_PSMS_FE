import React, {useState, FormEvent, ChangeEvent} from 'react'
import axios, {AxiosError} from 'axios'
import Logo from '../../components/header/Logo'

interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  error: string;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending request with:', { username, password }); // Debug payload
    try {
      const response = await axios.post<LoginResponse>(
        'https://reqres.in/api/login',
        {
          username,
          password,
        },
        {
          headers: {
            'x-api-key': 'reqres-free-v1',
            Accept: 'application/json',
            'Cache-Control': 'no-cache', // Prevent caching
          },
        }
      );
      console.log('API Response:', response); // Debug response
      setToken(response.data.token);
      setError('');
      setUsername(''); // Clear inputs
      setPassword('');
      alert(`Login successful! Token: ${response.data.token}`);
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      console.log('API Error:', axiosError); // Debug error
      setError(axiosError.response?.data?.error || 'Login failed');
      setToken('');
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(username)
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password)
  };

  return (
    <div className='w-screen h-screen bg-[#005ACD]'>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="mt-[30px]">
          <Logo  />
        </div>
        <div className="w-ful h-[704px] p-[53px] flex bg-white justify-center rounded-t-[30px]">
          <form className="w-[309px]" onSubmit={handleSubmit}>
            <h1 className='text-[32px] font-bold mt-[10px] mb-[28px]'>Đăng nhập</h1>
            <input 
              className='w-full mb-[28px] px-[20px] py-[10px] rounded-[15px] border-2 border-[#858390]'
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder='Tài khoản'
              required
            />
            <input 
              className='w-full mb-[24px] px-[20px] py-[10px] rounded-[15px] border-2 border-[#858390]'
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='Mật Khẩu'
              required
            />
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {token && <p style={{ color: 'green' }}>Token: {token}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
