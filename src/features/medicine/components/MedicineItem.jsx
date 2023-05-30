import { useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

function MedicineItem() {
  const [y, setY] = useState(400);
  const [opacity, setOpacity] = useState(0.3);
  const [hiden, setHiden] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden">
        <div className="flex justify-center">
          <img
            src="https://intriphat.com/wp-content/uploads/2021/07/mau-hop-thuoc-dep-5.jpg"
            alt="thuốc"
            className="object-cover h-[200px]"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-h5 text-black font-medium">Levothyroxine (Viên)</h3>
          <p className="text-h5 text-text_blur">hộp 4 vĩ x 20 viên</p>
        </div>
        <div className="flex flex-col">
          <p className="text-text_primary">
            Mã sản phẩm: <span className="font-medium text-black">MsWD36</span>
          </p>
          {/* Quantiry */}
          <div className="flex gap-2">
            <p className="text-text_primary">
              Đã bán: <span className="font-medium text-secondary">306</span>
            </p>
            <p className="text-text_primary">
              Còn lại: <span className="font-medium text-primary">480</span>
            </p>
          </div>
          {/* Date */}
          <div className="flex gap-2">
            <p className="text-text_primary">
              NSX: <span className="text-black text-h6">12/03/2022</span>
            </p>
            <p className="text-text_primary">
              HSD: <span className="text-black text-h6">24/06/2023</span>
            </p>
          </div>
        </div>

        {/* item 2 */}
        <motion.div
          className={classNames('w-full h-full bg-white absolute top-[0]', hiden ? 'hidden' : '')}
          animate={{ y, opacity }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-t from-white to-primary/30 rounded-t-lg px-3 py-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-h5 text-black font-medium">Levothyroxine (Viên)</h3>
              <p className="text-h5 text-text_blur">hộp 4 vĩ x 20 viên</p>
            </div>
            {/* Mã số */}
            <div className="flex flex-col gap-1">
              <p className="text-text_primary">
                Mã đơn nhập: <span className="font-medium text-black">MsWD36</span>
              </p>
              <p className="text-text_primary">
                Mã lô sản xuất: <span className="font-medium text-black">MsWD36</span>
              </p>
            </div>
            {/* Price */}
            <div className="flex flex-col gap-1">
              <p className="text-text_primary">
                Giá nhập: <span className="font-medium text-danger">3.000 vnđ</span>
              </p>
              <p className="text-text_primary">
                Giá bán: <span className="font-medium text-tertiary">5.000 vnđ</span>
              </p>
            </div>
            {/* other */}
            <div className="flex flex-col gap-1">
              <p className="text-text_primary">
                Mã sản phẩm: <span className="font-medium text-black">MsWD36</span>
              </p>
              {/* Quantiry */}
              <div className="flex gap-2">
                <p className="text-text_primary">
                  Đã bán: <span className="font-medium text-secondary">306</span>
                </p>
                <p className="text-text_primary">
                  Còn lại: <span className="font-medium text-primary">480</span>
                </p>
              </div>
              {/* Date */}
              <div className="flex gap-2">
                <p className="text-text_primary">
                  NSX: <span className="text-black text-h6">12/03/2022</span>
                </p>
                <p className="text-text_primary">
                  HSD: <span className="text-black text-h6">24/06/2023</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* View detail */}
      <div
        className="w-full flex justify-center items-center h-[40px]  rounded-md shadow-[0px_6px_7px_-1px_rgba(0,0,0,0.45)] cursor-default hover:shadow-none hover:opacity-50 hover:border-[1px] border-text_primary transition-all"
        onMouseOver={() => {
          setY(0);
          setOpacity(1);
          setHiden(false);
        }}
        onMouseOut={() => {
          setY(400);
          setOpacity(0.3);
        }}
      >
        {/* Hover Button */}
        <h3 className="text-text_primary text-h5 font-bold">THÔNG TIN THUỐC</h3>
      </div>
    </div>
  );
}

export default MedicineItem;
