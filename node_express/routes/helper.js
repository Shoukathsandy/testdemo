import { Client } from "../index.js";

export async function createnewmovie(data) {
  return await Client.db("B33WD").
    collection("movies").
    insertMany(data);
}
// signup user
export async function createuser(data) {
  return await Client.db("B33WD").
    collection("user").
    insertOne(data);
}
export async function getuserbyid(username) {
  return await Client.
    db("B33WD").
    collection("user").
    findOne({ username: username });
}

export async function getmoviebyid(id) {
  return await Client.
    db("B33WD").
    collection("movies").
    findOne({ id: id });
}


export async function updatemoviebyid(id, data) {
  return await Client.db("B33WD").
    collection("movies").
    updateOne({ id: id }, { $set: data });
}
export async function deletemoviebyid(id) {
  return await Client.
    db("B33WD").
    collection("movies").
    deleteOne({ id: id });
}
export async function getallmovies() {
  return await Client.db("B33WD").
    collection("movies").
    find({}).
    toArray();
}
