import axios from "axios"
import { CarModel } from "../../components/Card/Props"
import { BASE_URL_CAR_DATA } from "../Api"

interface ApiResponse {
  cars: CarModel[]
}

export const getCarData = async (id: number) => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL_CAR_DATA}/api/lamborghini.json`);
    const carData = response.data.cars.find((car) => car.id === id) || null;
    return carData;
  } catch (error) {
    console.log("Error on get api data", error)
  }
}