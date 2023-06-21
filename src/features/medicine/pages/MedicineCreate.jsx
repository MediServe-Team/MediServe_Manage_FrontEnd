import { useState, useEffect } from 'react';
import { UploadImg } from '../../.././components';
import { IoMdCloudUpload } from 'react-icons/io';
import getBase64 from '../../../helpers/getBase64';

function MedicineCreate() {
  const [listImg, setListImg] = useState([]);
  const [barcode, setBarcode] = useState('');

  const handleUploadBarCode = async (e) => {
    const file = e.target.files[0];
    // check cancle file
    if (!file) return;
    // convert file to base64
    const data = await getBase64(file);
    if (!barcode) {
      const barcodeArea = document.querySelector('#medicine-barcode-form');
      const barcodeImg = document.createElement('img');
      barcodeImg.src = data;
      barcodeImg.id = 'barcode-img';
      barcodeImg.style = 'position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover;';
      barcodeArea.appendChild(barcodeImg);
    } else {
      const barcodeImg = document.querySelector('#barcode-img');
      barcodeImg.src = data;
    }
    setBarcode(data);
  };

  return (
    <div className="w-full h-full rounded-lg bg-white p-5">
      <form className="h-full flex justify-between gap-8">
        {/* First column */}
        <div className="w-1/3 h-full flex flex-col gap-[10px]">
          <UploadImg listImg={listImg} setListImg={setListImg} />
          {/* Barcode */}
          <div className="flex flex-col">
            <span className="text-text_primary font-medium">Mã vạch</span>
            <div className="w-full h-[100px] flex justify-center items-center px-[10px] bg-primary/10 rounded-md">
              <div
                id="medicine-barcode-form"
                className="w-2/3 h-[80px] bg-white rounded-md border-2 border-text_primary border-dashed flex flex-col items-center justify-center relative cursor-pointer"
                onClick={() => document.querySelector('#upload-barcode').click()}
              >
                <IoMdCloudUpload className="text-[30px] text-text_primary" />
                <span className="text-text_primary">Nhấn để thêm</span>
                <input
                  id="upload-barcode"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleUploadBarCode(e)}
                />
              </div>
            </div>
          </div>
          {/* Note */}
          <div className="flex flex-col flex-1">
            <span className="text-text_primary font-medium">Ghi chú</span>
            <textarea
              className="border-2 outline-none rounded-md p-2 flex-1 border-text_primary/20 focus:border-text_primary transition-all duration-200"
              placeholder="Thêm ghi chú cho sản phẩm"
            />
          </div>
        </div>

        {/* Second column */}
        <div className="w-1/3 h-full flex flex-col gap-[20px]">
          {/* medicine name */}
          <div className="flex flex-col gap-1">
            <span className="text-text_primary font-medium">Tên thuốc</span>
            <input
              type="text"
              className="border-2 w-full h-[40px] outline-none rounded-md border-text_primary/20 focus:border-text_primary transition-all duration-200 px-2"
            />
          </div>

          {/* packing specification */}
          <div className="flex flex-col gap-1">
            <span className="text-text_primary font-medium">Quy cách đóng gói</span>
            <input
              type="text"
              className="border-2 w-full h-[40px] outline-none rounded-md border-text_primary/20 focus:border-text_primary transition-all duration-200 px-2"
            />
          </div>

          {/* dose form */}
          <div className="flex flex-col gap-1">
            <span className="text-text_primary font-medium">Dạng bào chế</span>
            <input
              type="text"
              className="border-2 w-full h-[40px] outline-none rounded-md border-text_primary/20 focus:border-text_primary transition-all duration-200 px-2"
            />
          </div>

          {/* apply to effected area code */}
          <div className="flex flex-col gap-1">
            <span className="text-text_primary font-medium">Mã đường dùng</span>
            <input
              type="text"
              className="border-2 w-1/2 h-[40px] outline-none rounded-md border-text_primary/20 focus:border-text_primary transition-all duration-200 px-2"
            />
          </div>

          {/* apply to effect area name */}
          <div className="flex flex-col gap-1">
            <span className="text-text_primary font-medium">Tên đường dùng</span>
            <input
              type="text"
              className="border-2 w-full h-[40px] outline-none rounded-md border-text_primary/20 focus:border-text_primary transition-all duration-200 px-2"
            />
          </div>

          {/* functional */}
          <div className="flex flex-col gap-1 flex-1">
            <span className="text-text_primary font-medium">Chức năng thuốc</span>
            <textarea
              className="border-2 outline-none rounded-md p-2 flex-1 border-text_primary/20 focus:border-text_primary transition-all duration-200"
              placeholder="Mô tả chức năng thuốc"
            />
          </div>
        </div>

        {/* Third column */}
        <div className="w-1/3 h-full"></div>
      </form>
    </div>
  );
}

export default MedicineCreate;
