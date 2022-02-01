import axios from "axios";
const url = "https://jekalomyap.herokuapp.com/api/users";
const posturl = "https://jekalomyap.herokuapp.com/api/user";
const Deleteurl = "https://jekalomyap.herokuapp.com/api";

export const Readtodo = () => axios.get(url);
export const postUser = (newdd) => axios.post(posturl, newdd);
export const DelUser = (id) => axios.delete(`${Deleteurl}/${id}`);
