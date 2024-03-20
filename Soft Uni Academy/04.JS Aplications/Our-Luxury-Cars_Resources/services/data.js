import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllFacts() {
  return await api.get(host + "/data/cars?sortBy=_createdOn%20desc");
}

// get listing by id
export async function getFactById(id) {
  return await api.get(host + `/data/cars/${id}`);
}

// create listing
export async function addFact(car) {
  return await api.post(host + "/data/cars", car);
}

// edit listing by id
export async function editFactById(id, car) {
  return await api.put(host + `/data/cars/${id}`, car);
}

// delete listing by id
export async function deleteFactById(id) {
  return await api.del(host + `/data/cars/${id}`);
}

export async function like(carId) {
  return await api.post(host + `/data/likes`, carId);
}

export async function getTotalLikes(carId) {
  return await api.get(
    host +
      `/data/likes?where=factId%3D%22${carId}%22&distinct=_ownerId&count`
  );
}

export async function didUserLiked(carId, userId) {
  return await api.get(
    host +
      `/data/likes?where=factId%3D%22${carId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
