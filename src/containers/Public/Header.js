import React from 'react';

import logo from '../../assets/Logo.png';
import { Button } from '../../components';

import Item from '../../components/ItemHeader';
import icons from '../../utils/icons';
import { useNavigate,Link } from 'react-router-dom';
import { useCallback } from 'react';
import { path } from '../../utils/constant';
const {AiOutlineHeart} = icons
function Header() {
    const navigate = useNavigate()
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN , {state:{flag}})
    },[])
    return ( <div>
        <div className="w-screen h-1200 flex items-center justify-between border border-gray-300">
            <div className='flex items-center gap-3'>
                <Link to={'/'}>
                    <img 
                        src={logo}
                        alt='logo'
                        className='w-[70px] h-[70px] object-container'
                    />
                </Link>
                <div className='flex items-center gap-3'>
                    <Item text='Nhà bán đất' />
                    <Item text='Nhà đất cho thuê' />
                    <Item text='Dự án' />
                    <Item text='Tin tức' />
                    <Item text='Wiki BĐS' />
                    <Item text='Phân tích đánh giá' />
                    <Item text='Danh bạ' />

                </div >
            </div>
            <div className='flex items-center gap-1' >
                <Button Icons={AiOutlineHeart} bgColor='bg-[#fff]' />
                
                <Button text={'Đăng nhập'} textColor='text' bgColor='bg-[#fff]' onClick={() => goLogin(false)} />
                <Button text={'Đăng ký'} textColor='text' bgColor='bg-[#fff]' onClick={() => goLogin(true)}  />
                <Button text={'Đăng tin'} textColor='text' bgColor='bg-[#fff]' />
            </div>
        </div>
    </div> );
}

export default Header;