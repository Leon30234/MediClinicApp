import { doctors } from "../config/data";

export const doctorsService = {
  getAll() {
    return doctors;
  },

  findById(id: number) {
    return doctors.find((doctor) => doctor.id === id);
  }
};
