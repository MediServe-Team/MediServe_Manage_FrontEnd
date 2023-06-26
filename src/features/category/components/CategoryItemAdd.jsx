import { useState } from 'react';
import { BsPlusSquareFill } from 'react-icons/bs';
import CustomSwitch from '../components/CustomSwitch';
import classNames from 'classnames';
import { Modal, Button } from '../../../components';

function CategotyItemAdd({ order }) {
  const [openModal, setOpenModal] = useState(false);
  const [isMedicine, setIsMedicine] = useState(false);

  // check color style for item add category
  let stylesColor;
  switch (order % 3) {
    case 0:
      stylesColor = '#38B3E1';
      break;
    case 1:
      stylesColor = '#EE9717';
      break;
    default:
      stylesColor = '#02D09E';
      break;
  }

  return (
    <div className="bg-white h-[87px] w-full rounded-lg mx-auto flex border-[2px]" style={{ borderColor: stylesColor }}>
      {/* Item add category */}
      <div onClick={() => setOpenModal(true)} className="w-full flex items-center gap-5 cursor-pointer">
        <p className="w-1/6 flex justify-center items-center text-h1" style={{ color: stylesColor }}>
          +
        </p>
        <p className="text-h6 flex items-center justify-start w-5/6" style={{ color: stylesColor }}>
          Thêm danh mục
        </p>
      </div>

      {/* Modal */}
      <Modal showModal={openModal}>
        <div className="w-[340px] flex flex-col items-center">
          <div className="w-full flex items-center gap-5">
            <span className="text-text_primary my-auto">
              <BsPlusSquareFill className="text-[20px]" />
            </span>
            <h3 className="text-text_primary font-semibold text-h4">Thêm Danh Mục</h3>
          </div>
          {/* divider */}
          <div className="bg-text_primary h-[1px] w-full mt-3"></div>

          {/* Form create category */}
          <form className="flex flex-col gap-4 mt-5 w-5/6">
            {/* Category Name */}
            <div className="flex flex-col gap-1">
              <span className="text-text_primary font-medium">Tên danh mục</span>
              <input
                type="text"
                className={classNames(
                  'border-2 w-full h-[40px] outline-none rounded-md focus:border-text_primary transition-all duration-200 px-2',
                  false ? 'border-danger' : 'border-text_primary/20',
                )}
              />
            </div>
            {/* Category Note */}
            <div className="flex flex-col gap-1">
              <span className="text-text_primary font-medium">Ghi chú</span>
              <input
                type="text"
                className={classNames(
                  'border-2 w-full h-[40px] outline-none rounded-md focus:border-text_primary transition-all duration-200 px-2',
                  false ? 'border-danger' : 'border-text_primary/20',
                )}
              />
            </div>
            {/* Is Medicine */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <span
                className={classNames(
                  'font-medium transition-colors',
                  isMedicine ? 'text-text_blur' : 'text-text_primary',
                )}
              >
                Khác thuốc
              </span>
              <CustomSwitch defaultChecked checked={isMedicine} onChange={() => setIsMedicine(!isMedicine)} />
              <span
                className={classNames(
                  'font-medium transition-colors',
                  isMedicine ? 'text-text_primary' : 'text-text_blur',
                )}
              >
                Thuốc
              </span>
            </div>
            {/* Button control modal*/}
            <div className="flex justify-between items-center mt-3">
              <Button
                type={'button'}
                size={'medium'}
                styleBtn={'outline'}
                modifier={'danger'}
                width={120}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Hủy
              </Button>
              <Button size={'medium'} modifier={'dark-primary'}>
                Tạo danh mục
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default CategotyItemAdd;
