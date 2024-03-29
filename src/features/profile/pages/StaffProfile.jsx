import { BsPencilSquare, BsCloudUploadFill } from 'react-icons/bs';

function StaffProfile({
  email,
  name,
  fullName,
  gender,
  age,
  dateOfBirth,
  phoneNumber,
  avatar,
  address,
  certificate,
  identityCard,
  numOfPPC,
}) {
  return (
    <div className="h-full w-full bg-white rounded-xl px-14 py-5 relative">
      <div className="flex">
        <div className="w-3/5 pr-24">
          <h1 className="text-dark_primary text-h3 font-bold mb-2">Thông tin cá nhân</h1>
          <p className="text-h6 text-text_blur font-semibold leading-tight mb-7">
            Điền những thông tin cần thiết vào những ô còn trống dưới đây.
            <br />
            Bạn có thể thay đổi thông tin bất cứ khi nào bạn muốn.
          </p>

          <p className="titleInputProfile">Email</p>
          <input type="email" className="inputProfile" placeholder="Ex:username@gmail.com" />
        </div>

        <div className="w-2/5">
          <div className="bg-orange-50 rounded-xl border-slate-400 border-solid border-2 h-[210px] py-2 px-3 relative">
            <h1 className="font-bold text-h4 text-dark_primary mb-2">Ảnh hồ sơ</h1>
            <div>
              <img className="h-[120px] mx-auto" src="https://i.ibb.co/cDz1NGp/86.jpg" alt="Failed" />
              <button className=" bg-primary hover:bg-dark_primary/80 active:bg-dark_primary rounded-full p-2 absolute right-24 bottom-6">
                <BsPencilSquare className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-3">
        <div className="flex w-3/5">
          <div className="w-1/3 pr-14">
            <p className="titleInputProfile">Tên</p>
            <input type="text" className="inputProfile" />
          </div>
          <div className="w-2/3 pr-24">
            <p className="titleInputProfile">Tên đầy đủ</p>
            <input type="text" className="inputProfile" />
          </div>
        </div>

        <div className="w-2/5">
          <p className="titleInputProfile">Số chứng chỉ hành nghề dược</p>
          <input type="number" className="inputProfile" />
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-3/5">
          <div className="pr-24">
            <p className="titleInputProfile">Địa chỉ thường trú</p>
            <input type="text" className="inputProfile" />
          </div>
          <div className="flex pr-24 mt-5">
            <div className="w-1/6 pr-8">
              <p className="titleInputProfile">Tuổi</p>
              <input type="number" className="inputProfile" style={{ paddingInline: '0.5rem' }} />
            </div>
            <div className="w-1/3 pr-8">
              <p className="titleInputProfile">Ngày sinh</p>
              <input type="date" className="inputProfile" />
            </div>
            <div className="w-1/2">
              <p className="titleInputProfile">Số điện thoại</p>
              <input type="number" className="inputProfile" />
            </div>
          </div>
        </div>

        <div className="flex w-2/5">
          <div className="w-1/2">
            <p className="titleInputProfile">Bằng cấp</p>
            <button className="h-[130px] w-[230px] bg-light_gray border-dashed border-2 border-text_blur rounded-xl ">
              <BsCloudUploadFill
                className="text-dark_primary hover:text-dark_primary/80 active:text-dark_primary text-center mx-auto"
                size={50}
              />
              <p className="text-h5 text-dark_primary">Nhấn vào đây để thêm ảnh</p>
            </button>
          </div>
          <div className="w-1/2 ml-6">
            <p className="titleInputProfile">CMND hoặc CCCD</p>
            <button className="h-[130px] w-[230px] bg-light_gray border-dashed border-2 border-text_blur rounded-xl ">
              <BsCloudUploadFill
                className="text-dark_primary hover:text-dark_primary/80 active:text-dark_primary text-center mx-auto"
                size={50}
              />
              <p className="text-h5 text-dark_primary">Nhấn vào đây để thêm ảnh</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="flex w-3/5 pr-24">
          <div className="w-1/3">
            <p className="titleInputProfile">Giới tính</p>
            <input type="radio" name="gender" value="Male" className="mr-2" />
            Nam
            <input type="radio" name="gender" value="Female" className="ml-5 mr-2" />
            Nữ
          </div>

          <div className="w-2/3">
            <p className="titleInputProfile">Mật khẩu</p>
            <input type="password" className="inputProfile" />
          </div>
        </div>

        <div className="flex w-2/5 justify-end items-end">
          <button className="btnProfile px-10 py-2 absolute bottom-4 right-6 hover:bg-dark_primary/80 active:bg-dark_primary">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaffProfile;
