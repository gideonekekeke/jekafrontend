import * as api from "./ApiFile";

const allUser = async () => {
	try {
		const { data } = await api.Readtodo();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const createData = async (userd) => {
	try {
		const { data } = await api.postUser(userd);
		return data;
	} catch (error) {
		console.log(error);
	}
};
const DeleteData = async (id) => {
	try {
		const { data } = await api.DelUser(id);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { allUser, createData, DeleteData };
