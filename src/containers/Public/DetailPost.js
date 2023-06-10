import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Slider } from '../../components';
import * as actions from '../../store/actions';
import icons from '../../utils/icons';
const DetailPost = () => {
    let { postId } = useParams();
    let dispatch = useDispatch();
    let { GoLocation, GiMoneyStack, BiArea, BsStopwatch, BsHash } = icons;
    let { posts } = useSelector((state) => state.post);
    
    useEffect(() => {
        postId && dispatch(actions.getPostsLimit({ id: postId }));
    }, [postId]);
    return (
        <div className="w-full flex gap-4">
            <div className="w-[70%] flex flex-col gap-2 bg-white border shadow-md p-4 rounded-lg">
                <Slider
                    slickNext
                    slickPrev
                    images={
                        posts && posts?.length > 0 && posts[0]?.images?.image && JSON.parse(posts[0]?.images?.image)
                    }
                />
                <h3 className="font-bold text-2xl text-red-500">{posts[0]?.title}</h3>
                <div className="flex items-center gap-2">
                    <span>Chuyên mục: </span>
                    <span className="text-blue-600 underline font-medium hover:text-orange-600 cursor-pointer">
                        {posts[0]?.overviews?.area}
                    </span>
                </div>
                <div className="flex items-center gpa-2">
                    <GoLocation color="#2563eb" size={20} />
                    <span>{posts[0]?.address}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <GiMoneyStack size={18} />
                        <span className="font-semibold text-lg text-green-600">{posts[0]?.attributes?.price}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <BiArea size={18} /> <span>{posts[0]?.attributes?.acreage}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        {' '}
                        <BsStopwatch size={18} />
                        <span>{posts[0]?.attributes?.published}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <BsHash size={18} />
                        <span>{posts[0]?.attributes?.hashtag}</span>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="font-semibold text-xl my-4">Thông tin mô tả</h3>
                    <div className="flex flex-col gap-2">
                        <span>{posts[0]?.description ? JSON.parse(posts[0]?.description) : ''}</span>
                        {/* {posts[0]?.description &&
                            JSON.parse(posts[0]?.description)?.map((item, index) => {
                                return <span key={index}>{item}</span>;
                            })} */}
                    </div>
                    <div className="mt-8">
                        <h3 className="font-semibold text-xl my-4">Đặc điểm tin đăng</h3>
                        <table>
                            <tbody>
                                <tr className="w-full">
                                    <td className=" p-4">Mã tin</td>
                                    <td className=" p-4">{posts[0]?.overviews?.code}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className=" p-4">Khu vực</td>
                                    <td className=" p-4">{posts[0]?.overviews?.area}</td>
                                </tr>
                                <tr>
                                    <td className=" p-4">Loại tin rao</td>
                                    <td className=" p-4">{posts[0]?.overviews?.type}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className=" p-4">Đối tượng</td>
                                    <td className=" p-4">{posts[0]?.overviews?.target}</td>
                                </tr>
                                <tr>
                                    <td className=" p-4">Gói tin</td>
                                    <td className=" p-4">{posts[0]?.overviews?.bonus}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className=" p-4">Ngày đăng</td>
                                    <td className=" p-4">{posts[0]?.overviews?.created}</td>
                                </tr>
                                <tr>
                                    <td className=" p-4">Ngày hết hạn</td>
                                    <td className=" p-4">{posts[0]?.overviews?.expire}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8">
                        <h3 className="font-semibold text-xl my-4">Thông tin liên hệ</h3>
                        <table>
                            <tbody>
                                <tr className="w-full">
                                    <td className=" p-4">Liên hệ</td>
                                    <td className=" p-4">{posts[0]?.user?.name}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className=" p-4">Điện thoại</td>
                                    <td className=" p-4">{posts[0]?.user?.phone}</td>
                                </tr>
                                <tr>
                                    <td className=" p-4"> </td>
                                    <td className=" p-4">{posts[0]?.user?.zalo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl my-4">Bản đồ</h3>
                    </div>
                </div>
            </div>
            <div className="w-[30%]">content</div>
        </div>
    );
};

export default DetailPost;
