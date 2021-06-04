import { mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        if (!mocks) {
            reject("Not Found!")
        }
        resolve(mocks);
    });
};

restaurantsRequest()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })