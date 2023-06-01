import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function App(){
    const navigate = useNavigate()
    const [showModal,setShowModal] = useState(false)
    function Notification(){
        return(<>
                <div className="h-[10vh] w-[25vw] absolute z-50 top-2 right-2 bg-white flex items-center">
                    <div className="h-fit w-fit grid grid-cols-5">
                        <div className="h-full w-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="h-full w-full col-span-4">
                            <p className="font-bold">Lỗi đăng nhập</p>
                            <p>Thông tin đăng nhập không chính xác</p>
                        </div>
                    </div>
                </div>
            </>)
    }
    function Modal(){
        return(<>
        <div className="h-screen w-full absolute z-20 top-0 bg-black/50"></div>
        <div className="h-screen w-full absolute z-50 top-0 flex justify-center items-center">
            <div className="h-fit w-6/12 bg-white">
                <div className="h-full w-full px-10">
                    <h1 className="text-xl font-bold text-start my-5">Chọn chức năng</h1>
                    <hr className="my-5"></hr>
                    <input className="h-4 w-4" onClick={()=>{navigate('/admin')}} type="radio" value="choose"/>
                    <label className="text-lg ml-2">Quản trị</label><br/>
                    <input className="h-4 w-4 mt-5" onClick={()=>{navigate('/admin')}} type="radio" value="choose"/>
                    <label className="text-lg ml-2">Vận hành</label><br/>
                    <hr className="my-5"></hr>
                    <button onClick={()=>{setShowModal(!showModal)}} className="w-fit px-8 py-2 border-2 rounded-md mb-5">Thoát</button>
                </div>
            </div>
        </div>
        </>)
    }
    return(<>
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">
    <Notification/>
    {showModal && <Modal/>}
        <div className="h-fit w-5/12 bg-white shadow">
            <div className="h-full w-full px-16 py-14">
                <h1 className="text-3xl font-bold text-center">Đăng nhập</h1>
                <hr className="my-5"></hr>
                <div className="grid grid-cols-3 my-5">
                    <div className="h-full w-full text-xl text-center font-bold flex">
                        <font className="text-red-500">*</font>
                        <h1 className="ml-2">Tài khoản</h1>
                    </div>
                    <div className="h-full w-full col-span-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full pr-3 pl-10 py-2 border-2 border-red-400 focus:outline-none focus:border-red-400 focus:ring-red-500" placeholder="Nhập tài khoản hoặc số điện thoại"/>
                        </div>
                        <p className="mt-2 text-red-400">'Mật khẩu' là bắt buộc</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-5">
                    <div className="h-full w-full text-xl text-center font-bold flex">
                        <font className="text-red-500">*</font>
                        <h1 className="ml-2">Mật khẩu</h1>
                    </div>
                    <div className="h-full w-full col-span-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full pr-3 pl-10 py-2 border-2 border-red-400 focus:outline-none focus:border-red-400 focus:ring-red-500" placeholder="Nhập tài khoản hoặc số điện thoại"/>
                        </div>
                        <p className="mt-2 text-red-400">'Mật khẩu' là bắt buộc</p>
                    </div>                   
                </div>
                <div className="h-fit w-full flex justify-end items-center mt-5">
                    <a href="#" className="w-fit text-blue-700">Quên mật khẩu?</a>
                </div>
                <div className="h-fit w-full flex justify-center items-center mt-6">
                    <button onClick={()=>{setShowModal(!showModal)}}  className="w-fit px-8 py-2 bg-sky-500 text-white rounded-md">Đăng nhập</button>
                </div>
            </div>
        </div>
    </div>
    </>)
}