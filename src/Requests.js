import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

export async function getCars() {
    return (await instance.get(`/cars`)).data;
}

export async function getCarById(id) {
    return (await instance.get(`/cars/${id}`)).data;
}

export async function addCar(newCar) {
    return (await instance.post("/cars/add", newCar)).data;
}

export async function getDrivers() {
    return (await instance.get(`/drivers`)).data;
}

export async function getDriverById(id) {
    return (await instance.get(`/drivers/${id}`)).data;
}

export async function addDriver(newDriver) {
    return (await instance.post("/drivers/add", newDriver)).data;
}

export async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}