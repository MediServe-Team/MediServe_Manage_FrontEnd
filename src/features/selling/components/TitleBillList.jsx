import { CheckBox } from '@mui/icons-material';
import { BsX } from 'react-icons/bs';

function TitleListBill({ children, title, isDrug }) {
  return (
    <div className="">
      {/* heading */}
      <ul className="flex justify-between items-center gap-2 bg-primary/50 rounded-lg text-h5 font-medium px-2 py-[10px] text-text_primary">
        <li className="flex-[4] items-center flex justify-center">
          <span>Mã hóa đơn</span>
        </li>
        <li className="flex-[5] items-center flex justify-center">
          <span>Nhân viên</span>
        </li>
        <li className="flex-[4] items-center flex justify-center">
          <span>Ngày tạo</span>
        </li>
        <li className="flex-[5] items-center flex justify-center">
          <span>Khách hàng</span>
        </li>
        <li className="flex-[5] items-center flex justify-center">
          <span>Tổng Tiền</span>
        </li>
        <li className="flex-[2] items-center flex justify-center"></li>
      </ul>
    </div>
  );
}

export default TitleListBill;
