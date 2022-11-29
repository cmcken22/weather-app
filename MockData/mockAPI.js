import { toronto, tulum, washington } from "./index";

const wait = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const locations = {
  'Toronto,ON,CANADA': toronto,
  'Washington,DC,USA': washington,
  'Tulum,QR,MEXICO': tulum
}

export const getForecast = (location) => {
  return new Promise(async (resolve) => {
    await wait(0);
    return resolve(locations[location]);
  });
}