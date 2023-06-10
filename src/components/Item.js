/* eslint-disable jsx-a11y/alt-text */
import React, { memo, useState } from 'react';
import icons from '../utils/icons';
import { formatVietnameseToString } from '../utils/common/formatVietnameseToString';
import { useNavigate,Link } from 'react-router-dom';
import { path } from '../utils/constant';
let { AiFillStar, AiFillHeart, AiOutlineHeart, BsFillBookmarkStarFill } = icons;
const indexs = [0, 1, 2, 3];
const Item = ({ images, user, title, star, description, attributes, address, key,id }) => {
    let navigate = useNavigate()
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    const handleStar = (star) => {
        let stars = []
        for(let i = 1 ; i<= +star;i++){
            stars.push(<AiFillStar className="start-item" size={20} color="yellow" />)
        }
        return stars
    }

    return (
        <div key={key} className="w-full flex items-start border-orange-700 border-t p-4 cursor-pointer">
            <Link to={`/${path.DETAIL_POST}/${formatVietnameseToString(title?.replace('/',''))}/${id}`} className="w-[45%] h-[240px] flex ">
                <div className="w-full flex gap-[2px] items-start flex-wrap relative">
                    {images?.length > 4 &&
                        images?.filter((item, index) =>
                            indexs
                                .some(item => item === index))
                                ?.map((i,index2) => {
                                    return <img key={index2} src={i} alt="preview" className="w-[140px] h-[120px] object-cover" />;
                                },
                        )}

                    <span className="bg-overplay30 text-white rounded-md absolute px-2 py-1 left-2 bottom-2 hover:bg-overplay70">
                        {`${images?.length} ảnh`}
                    </span>
                    <span
                        onMouseEnter={() => setIsHoverHeart(true)}
                        onMouseLeave={() => setIsHoverHeart(false)}
                        className=" text-white  absolute  right-5 bottom-2 "
                    >
                        {isHoverHeart ? <AiFillHeart color="red" size={26} /> : <AiOutlineHeart size={26} />}
                    </span>
                </div>
            </Link>
            <div className="w-[55%] pl-2">
                <div className="flex justify-between">
                    <Link to={`/${path.DETAIL_POST}/${formatVietnameseToString(title?.replace('/',''))}/${id}`} className="w-full flex gap-1">
                        <span className=" text-red-600 font-medium">
                            
                            {handleStar(+star).length > 0 && handleStar(+star).map((star,number) => {
                                return <span key={number} >{star}</span>
                            }) }
                            {title}
                        </span>
                    </Link>
                    <div className="w-[10%] flex justify-end px-1">
                        <BsFillBookmarkStarFill size={24} color="orange" />
                    </div>
                </div>
                <div className="my-2 flex items-center text-sm justify-around gap-1">
                    <span className='text-green-500 font-semibold' >{attributes?.price}</span>
                    <span>{attributes?.acreage}</span>
                    <span>{`${address?.split(',')[address?.split(',').length-2]}, ${address?.split(',')[address?.split(',').length-1]}`}</span>
                </div>
                <div className="text-gray-500 w-full h-[85px] overflow-hidden text-ellipsis whitespace-pre-wrap text-sm">{description}</div>
                <div className="flex items-center my-3 justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
                            className="w-[30px] h-[30px] object-cover rounded-full"
                        />
                        <p className='text-xs' >{user?.name}</p>
                    </div>
                    <div className="px-1 flex items-center gap-2">
                        <button type="button" className="bg-blue-700 text-white px-2 py-1 rounded-md text-xs">
                            {`Gọi ${user?.phone}`}
                        </button>
                        <button
                            type="button"
                            className="text-blue-700 border px-2 py-1 rounded-md border-blue-700 bg-white text-xs"
                        >
                            Nhắn zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Item);
