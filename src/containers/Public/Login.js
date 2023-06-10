import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo-removebg-preview.png";
import banner from "../../assets/bannerLogin.png";
import icons from "../../utils/icons";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as actions from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../utils/common/validateFields";
let {
  AiOutlineClose,
  FiUser,
  BiLockAlt,
  AiOutlineFacebook,
  AiFillGoogleCircle,
} = icons;
export default function Login({}) {
  let location = useLocation();
  const navigate = useNavigate()
  let dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(true);
  let [isRegister, setIsRegister] = React.useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const {isLoggedIn,msg,update} = useSelector(state => state.auth)
  const [payload, setPayload] = useState({
    phone: "",
    name: "",
    password: "",
  });
  let handleSubmit = async () => {
    
    let finalPayload = isRegister ? payload : {
      phone: payload.phone,
      password: payload.password
    }
    let invalids = validate(finalPayload,setInvalidFields);
    if(invalids === 0){

      isRegister === true ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
    }
    

    //setShowModal(false)
  };

  let handleHiddenModal = () => {
    setShowModal(false);
    navigate('/')
  };
  
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  useEffect(() => {
    if(msg){
      Swal.fire('Oops !',msg,'error')

    }
  },[msg,update])
  useEffect(() => {
    
    isLoggedIn.isLoggedIn === true && navigate('/')
  },[isLoggedIn.isLoggedIn])
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-sm">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                <div className="relative  flex w-1100  ">
                  <div className="flex flex-col w-[400px] h-[675px] bg-secondary3 rounded-l-lg">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[150px] h-[150px] object-container"
                    />
                    <img
                      src={banner}
                      alt="banner"
                      className="w-[300px] h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col h-[100%] w-[500px] p-[32px]">
                    <div
                      className=" absolute flex justify-end items-center text-2xl font-semibold top-[12px] right-[212px]"
                      onClick={() => handleHiddenModal()}
                    >
                      <AiOutlineClose />
                    </div>
                    <div className="font-semibold text-sm mt-[48px] h-[24px]">
                      <p>Xin chào bạn</p>
                    </div>
                    <div className="mt-[4px] mb-[32px]">
                      <h2 className="font-semibold text-xl">
                        {isRegister
                          ? "Đăng kí tài khoản mới"
                          : "Đăng nhập để tiếp tục"}
                      </h2>
                    </div>
                    {isRegister && (
                      <div className="w-[100%] h-[48px] mb-6 ">
                        <InputForm
                          setInvalidFields={setInvalidFields}
                          invalidFields={invalidFields}
                          className=""
                          label={"Họ và tên"}
                          type={"name"}
                          id={"name"}
                          Icons={FiUser}
                          value={payload.name}
                          setValue={setPayload}
                        />
                      </div>
                    )}

                    <div className="w-[100%] h-[48px] mb-6 ">
                      <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        className=""
                        label={"Số điện thoại"}
                        type={"number"}
                        id={"phone"}
                        Icons={FiUser}
                        value={payload.phone}
                        setValue={setPayload}
                      />
                    </div>
                    <div className="w-[100%] h-[48px] mb-6 ">
                      <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        className="py-[13px] px-[43px]"
                        type={"password"}
                        id={"password"}
                        label={"Mật khẩu"}
                        Icons={BiLockAlt}
                        isPass={true}
                        value={payload.password}
                        setValue={setPayload}
                      />
                    </div>
                    <Button
                      text={isRegister ? "Đăng kí" : "Đăng nhập"}
                      bgColor="bg-secondary2"
                      textColor="text-white"
                      fullWidth
                      onClick={handleSubmit}
                    />
                    <div className="w-[100%] h-[48px] flex justify-between items-center ">
                      <div className="flex items-center ">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required
                        />
                        <label
                          htmlFor="remember"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Nhớ mật khẩu
                        </label>
                      </div>
                      <div className="text-red-600 font-semibold text-xs cursor-pointer">
                        Quên mật khẩu?
                      </div>
                    </div>
                    <div className="w-[100%] h-[28px] mb-4 flex justify-between items-center relative ">
                      <div className="w-[100%] h-[1px] bg-[#ccc]"></div>
                      <div className=" text-[#ccc] text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 bg-[#ffffff]">
                        Hoặc
                      </div>
                    </div>
                    <div className="w-[100%] h-[48px] mb-4 flex gap-5 ">
                      <div className="w-[50%] h-[100%]">
                        <Button
                          text={"Facebook"}
                          bgColor="bg-[#ffffff]"
                          textColor="text-back"
                          fullWidth
                          border="border border-black"
                          Icons={AiOutlineFacebook}
                        />
                      </div>
                      <div className="w-[50%] h-[100%]">
                        <Button
                          text={"Google"}
                          bgColor="bg-[#ffffff]"
                          textColor="text-black"
                          fullWidth
                          border="border border-black"
                          Icons={AiFillGoogleCircle}
                        />
                      </div>
                    </div>
                    <div className="w-[100%] h-[48px] mb-4 flex gap-5  items-center justify-center">
                      {isRegister ? (
                        <>
                          <small>
                            Bạn đã có tài khoản?{" "}
                            <span
                              onClick={() => {
                                setPayload({
                                  phone: "",
                                  name: "",
                                  password: "",
                                })
                                setIsRegister(false)}}
                              className="text-red-500 cursor-pointer"
                            >
                              Đăng nhập
                            </span>{" "}
                            tại đây
                          </small>
                        </>
                      ) : (
                        <small>
                          Chưa là thành viên?{" "}
                          <span
                            onClick={() => {
                              setPayload({
                                phone: "",
                                name: "",
                                password: "",
                              })
                              setIsRegister(true)
                            }}
                            className="text-red-500 cursor-pointer"
                          >
                            Đăng kí
                          </span>{" "}
                          tại đây
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
