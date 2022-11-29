import { LOCATIONS } from "../src/constants";
import { toronto, tulum, tokyo } from "./index";

const wait = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const locations = {
  'Toronto,ON,CANADA': toronto,
  'Tokyo,JAPAN': tokyo,
  'Tulum,QR,MEXICO': tulum
}

export const getForecast = (location) => {
  console.clear();
  console.log('location:', location);
  return new Promise(async (resolve) => {
    await wait(0);
    if (location === LOCATIONS.TOKYO) return resolve(null);
    const res = locations[location];
    if (res?.locations?.[location]) {
      const data = res?.locations?.[location];
      console.log('DATA:', data);
      return resolve(data);
    }
    return resolve(null);
  });
}