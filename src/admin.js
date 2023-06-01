import { useNavigate } from "react-router-dom"
export default function Admin(){
    const navigate = useNavigate()
    return(
    <div className="h-screen w-full bg-white p-10">
        <div className="h-fit w-full grid grid-cols-2 gap-5">
            <div className="h-[10vh] w-full flex justify-start">              
                <div onClick={()=>{navigate("/")}} className="h-1/2 w-fit text-xl ml-5 flex items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <p className="ml-2 mb-1">Quay lại</p>
                </div>
            </div>
            <div className="h-[10vh] w-full flex justify-end">
                <button onClick={()=>{navigate("/admin/create")}} className="h-1/2 w-fit px-5 bg-blue-500 text-white cursor-pointer">+ Thêm nhân viên</button>
            </div>
        </div>
        <div className="h-fit w-full grid grid-cols-4 gap-5">
            <div className="h-[10vh] w-full">
                <div className="h-1/2">Từ khóa</div>
                <div className="h-1/2 w-full">
                    <input className="h-full w-full border-2 px-3" placeholder="Từ khóa"></input>
                </div>
            </div>
            <div className="h-[10vh] w-full">
                <div className="h-1/2">Trạng thái</div>
                <div className="h-1/2 w-full">
                    <input className="h-full w-full border-2 px-3" placeholder="Trạng thái"></input>
                </div>
            </div>
            <div className="h-[10vh] w-full">
                <div className="h-1/2">Loại nhân viên</div>
                <div className="h-1/2 w-full">
                    <input className="h-full w-full border-2 px-3" placeholder="Loại nhân viên"></input>
                </div>
            </div>
            <div className="h-[10vh] w-full">
                <div className="h-1/2">Ngày tạo</div>
                <div className="h-1/2 w-full">
                    <input className="h-full w-full border-2 px-3" placeholder="Ngày tạo"></input>
                </div>
            </div>
        </div>
        <div className="h-fit w-full flex justify-start items-center mt-10">
            <button className="px-5 py-1 bg-blue-500 text-white rounded-sm">Tìm kiếm</button>
            <button className="px-5 py-1 ml-5 bg-neutral-200 rounded-sm">Làm mới</button>
        </div>
        <div className="h-fit w-full mt-5">
            <table className="w-full text-md">
                <tr className="h-10 bg-neutral-100 text-left">
                    <th className="p-2">STT</th>
                    <th className="p-2">Mã nhân viên</th>
                    <th className="p-2">Họ tên</th>
                    <th className="p-2">Số điện thoại</th>
                    <th className="p-2">Loại nhân viên</th>
                    <th className="p-2">Thuộc trạm</th>
                    <th className="p-2">Là quản lý trạm</th>
                    <th className="p-2">Dịch vụ giao hàng</th>
                    <th className="p-2">Ngày tạo</th>
                    <th className="p-2">Trạng thái</th>
                    <th className="p-2">Thao tác</th>
                </tr>
                <tr className="h-10">
                    <td>1</td>
                    <td>Dc374be02</td>
                    <td>Nguyen Dat</td>
                    <td>0352333221</td>
                    <td>Tài xế</td>
                    <td>BD03</td>
                    <td>Không</td>
                    <td>Giao hàng tiêu chuẩn</td>
                    <td>31/05/2023 17:03:40</td>
                    <td>
                        <div className="h-[3vh] w-10/12 bg-green-100 rounded-sm text-sm flex justify-center items-center"><p className="text-center">Đã kích hoạt</p></div>
                    </td>
                    <td>
                        <select>
                            <option>Thao tác</option>
                        </select>
                    </td>
                </tr>
                <tr className="h-10">
                    <td>1</td>
                    <td>Dc374be02</td>
                    <td>Nguyen Dat</td>
                    <td>0352333221</td>
                    <td>Tài xế</td>
                    <td>BD03</td>
                    <td>Không</td>
                    <td>Giao hàng tiêu chuẩn</td>
                    <td>31/05/2023 17:03:40</td>
                    <td>
                        <div className="h-[3vh] w-10/12 bg-green-100 rounded-sm text-sm flex justify-center items-center"><p className="text-center">Đã kích hoạt</p></div>
                    </td>
                    <td>
                        <select>
                            <option>Thao tác</option>
                        </select>
                    </td>
                </tr>
                <tr className="h-10">
                    <td>1</td>
                    <td>Dc374be02</td>
                    <td>Nguyen Dat</td>
                    <td>0352333221</td>
                    <td>Tài xế</td>
                    <td>BD03</td>
                    <td>Không</td>
                    <td>Giao hàng tiêu chuẩn</td>
                    <td>31/05/2023 17:03:40</td>
                    <td>
                        <div className="h-[3vh] w-10/12 bg-green-100 rounded-sm text-sm flex justify-center items-center"><p className="text-center">Đã kích hoạt</p></div>
                    </td>
                    <td>
                        <select>
                            <option>Thao tác</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
        <div className="h-fit w-full flex justify-end items-center mt-10">
            <button className="px-3 py-1 mx-2 border-2 rounded-sm">{"<"}</button>
            <button className="px-3 py-1 mx-2 border-2 border-blue-500 rounded-sm">1</button>
            <button className="px-3 py-1 mx-2 border-2 rounded-sm">2</button>
            <button className="px-3 py-1 mx-2 border-2 rounded-sm">{">"}</button>
        </div>
    </div>
    )
}