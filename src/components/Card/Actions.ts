import { getCarData } from "../../api/service/getCars";
import { CarModel } from "./Props";

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  const response = await getCarData(id);
  try {
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error) 
  }
};
export const handlePreviousItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    if (carData && carData?.id > 1) {
      const response = await getCarData(carData.id - 1);
      if (response) setCarData(response)
    }
  } catch (error) {
    console.log(error)  
  }
};
export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    if (carData && carData?.id > 1) {
      const response = await getCarData(carData.id + 1);
      if (response) setCarData(response)
    }
  } catch (error) {
    console.log(error)  
  }
};