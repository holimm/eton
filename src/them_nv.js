import { useNavigate } from "react-router-dom"

export default function CreateEmployee(){
    const navigate = useNavigate()
    function Field(props){
        return(
            <div className={`h-fit w-full col-span-${props.span}`}>
                <div className="h-fit w-full flex">
                    {props.require && <font className="text-red-500">*</font>}
                    <h1 className="ml-2">{props.label}</h1>
                </div>
                <div className="h-fit w-full mt-3">
                    <input className={`h-fit w-full border-2 px-3 py-2 ${props.error && "border-red-400 focus:outline-none focus:border-red-400 focus:ring-red-500"}`} placeholder={`${props.placeholder}`}></input>               
                </div>
                {props.error && props.error.map((item,id)=><p className="mt-2 text-red-400">{item}</p>)}
            </div>
        )
    }
    function FieldSelector(props){
        return(
            <div className={`h-fit w-full col-span-${props.span}`}>
                <div className="h-fit w-full flex">
                    {props.require && <font className="text-red-500">*</font>}
                    <h1 className="ml-2">{props.label}</h1>
                </div>
                <div className="h-fit w-full mt-3">
                    <select className={`h-fit w-full border-2 px-3 py-2 ${props.error && "border-red-400 focus:outline-none focus:border-red-400 focus:ring-red-500"}`}>
                        <option>{props.placeholder}</option>    
                    </select>               
                </div>
                {props.error && props.error.map((item,id)=><p className="mt-2 text-red-400">{item}</p>)}
            </div>
        )
    }
    function FieldImage(props){
        return(
            <div className={`h-fit w-full col-span-${props.span}`}>
                <div className="h-fit">{props.label}</div>
                <div className="h-fit w-full mt-3">
                    <div className="h-40 w-40 rounded-md border-2 flex justify-center items-center cursor-pointer">
                        <div className="h-fit w-fit text-xl">
                            <h1 className="text-center">+</h1>
                            <p className="text-center">Tải lên</p>
                        </div>
                    </div>              
                </div>
            </div>
        )
    }
    return(
    <div className="h-screen w-full bg-white p-10">
        <div className="h-fit w-full grid grid-cols-3 gap-5">
            <Field label="Số điện thoại" placeholder="Số điện thoại" span='1' require={true}/>
            <Field label="Họ tên" placeholder="Họ tên" span='1' require={true}/>
            <Field label="Email" placeholder="Email" span='1'/>
            <Field label="Mật khẩu" placeholder="Nhập mật khẩu" span='1' require={true} error={[
                "'Mật khẩu' phải từ 8 đến 20 ký tự",
                "'Mật khẩu' phải có ít nhất 1 ký tự hoa",
                "'Mật khẩu' phải có ít nhất 1 con số",
            ]}/>
            <Field label="CMND/CCCD" placeholder="CMND/CCCD" span='1'/>
            <FieldSelector label="Dịch vụ giao hàng" placeholder="Email" span='1' require={true}/>
            <Field label="Địa chỉ" placeholder="Nhập vào địa chỉ" span='2'/>
            <FieldSelector label="Trạng thái" placeholder="Trạng thái" span='1' require={true}/>
            <Field label="Thuộc trạm" placeholder="Thuộc trạm" span='3'/>
            <FieldImage label="Ảnh đại diện" placeholder="Thuộc trạm" span='1'/>
            <FieldImage label="Ảnh CMND/CCCD" placeholder="Thuộc trạm" span='1'/>
            <FieldImage label="Ảnh bằng lái" placeholder="Thuộc trạm" span='1'/>
        </div>
        <div className="h-fit w-full flex justify-start items-center mt-10 pb-20">
            <button onClick={()=>{alert("Test")}} className="px-6 py-1 bg-blue-500 text-white rounded-sm">Lưu</button>
            <button onClick={()=>{navigate("/admin")}} className="px-6 py-1 ml-5 bg-neutral-200 rounded-sm">Thoát</button>
        </div>
    </div>
    )
}