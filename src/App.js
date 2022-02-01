import React from "react";

import styled from "styled-components";
import axios from "axios";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
import { MdDeleteOutline } from "react-icons/md";
// import {} from '@hook'

function App() {
	const [handleFormData, setHandleFormData] = React.useState({
		first_name: "",
		last_name: "",
		username: "",
		data_of_birth: "",
	});

	const [data, setData] = React.useState([]);

	const getData = async () => {
		await axios
			.get("https://jekalobuild.vercel.app/api/users")
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleonChnage = (e) => {
		e.preventDefault();

		const fieldName = e.target.getAttribute("name");
		const fieldValue = e.target.value;

		// getting the existing formdata input
		const newFormData = { ...handleFormData };

		//updating the formdata with the input of the users

		newFormData[fieldName] = fieldValue;

		setHandleFormData(newFormData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			},
		};

		const formData = new FormData();

		formData.append("first_name", handleFormData.first_name);
		formData.append("last_name", handleFormData.last_name);
		formData.append("username", handleFormData.username);
		formData.append("data_of_birth", handleFormData.data_of_birth);

		await axios.post(
			"http://jekalobuild.vercel.app/api/user",
			formData,
			config,
		);
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<FormHold onSubmit={handleSubmit}>
				<InputHold1>
					<Hold>
						{" "}
						<span>First Name</span>
						<input
							onChange={handleonChnage}
							name='first_name'
							type='text'
							required={true}
							placeholder='First name'
						/>
					</Hold>
					<Hold>
						{" "}
						<span>Last Name</span>
						<input
							onChange={handleonChnage}
							name='last_name'
							type='text'
							required={true}
							placeholder='Last name'
						/>
					</Hold>

					<button type='submit'>Submit</button>
				</InputHold1>
				<InputHold1>
					<Hold>
						{" "}
						<span>Username </span>
						<input
							onChange={handleonChnage}
							name='username'
							type='text'
							required={true}
							placeholder='Username'
						/>
					</Hold>
					<Hold>
						{" "}
						<span>Date of Birth</span>
						<input
							onChange={handleonChnage}
							name='date_of_birth'
							required={true}
							placeholder='Date of Birth'
						/>
					</Hold>
				</InputHold1>
			</FormHold>
			<br />
			<br />
			<UserHead>Users</UserHead>
			<br />

			<UserHold>
				<Naming>
					{" "}
					<UserIcon>AH</UserIcon>
					<UserName>giddy</UserName>
					<FullName> Gideon ekekek</FullName>
				</Naming>
				<DelHold>
					<UserDate>Date</UserDate>
					<span>
						<MdDeleteOutline />
					</span>
				</DelHold>
			</UserHold>
		</Container>
	);
}

export default App;

const Naming = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	font-weight: bold;
`;

const UserHold = styled.div`
	width: 700px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const UserIcon = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: #11468f;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 14px;
`;
const UserName = styled.div``;
const FullName = styled.div``;
const DelHold = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100px;
	span {
		color: red;
		margin-top: 7px;
	}
`;
const UserDate = styled.div``;

const UserHead = styled.div`
	height: 40px;
	background-color: #f5f8fb;
	width: 700px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	border-radius: 5px;
`;
const Hold = styled.div`
	display: flex;
	flex-direction: column;
	left: 20px;
	margin: 10px;

	span {
		padding-bottom: 10px;
		color: #11468f;
		font-weight: bold;
	}
`;
const FormHold = styled.form`
	margin-top: 200px;
`;
const InputHold1 = styled.div`
	/* justify-content: center; */
	display: flex;
	align-items: center;
	input {
		height: 35px;
		/* margin: 10px; */
		width: 250px;
		border: 1px solid #d5deeb;
		outline: none;
		border-radius: 5px;
		display: flex;
		padding-left: 10px;

		:hover {
			border-color: #d5deeb;
		}
	}

	button {
		height: 35px;
		width: 150px;
		margin-top: 30px;
		border: none;
		outline: none;
		border-radius: 5px;
		color: white;
		background: #11468f;
		cursor: pointer;

		:hover {
			border-color: #d5deeb;
			border: 2px solid #d5deeb;
		}
	}
`;
// const FormHold = styled.div``

const Container = styled.div`
	background: "#FFFFFF";
	width: 100%;
	height: 100vh;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	align-items: center;
`;
