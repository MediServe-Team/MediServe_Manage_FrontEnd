import { axiosBase } from '../../lib/axios';

export const createDoseService = async (data) => {
  const response = await axiosBase.post('/prescriptions/create', {
    staffId: data?.staffId,
    diagnose: data?.diagnose,
    isDose: data?.isDose,
    note: data?.note,
    listMedicines: data?.listMedicines,
  });

  return response.data;
};

export const filterDoseService = async (searchValue) => {
  const response = await axiosBase.get(`/prescriptions/filter?searchValue=${searchValue}`);
  return response.data;
};

export const deleteDoseService = async (id) => {
  const response = await axiosBase.delete(`/prescriptions/delete/${id}`);
  return response.data;
};

export const getDoseService = async (id) => {
  const response = await axiosBase.get(`/prescriptions/detail/${id}`);
  return response.data;
};

export const updateDoseService = async (id, data) => {
  const dataUpdate = {
    diagnose: data?.diagnose,
    note: data?.note,
    listMedicines: data?.listMedicines,
  };
  const response = await axiosBase.put(`/prescriptions/update/${id}`, dataUpdate);
  return response.data;
};
