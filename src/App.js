import React from "react";

import styled from "styled-components";

import { MdDeleteOutline } from "react-icons/md";

import { allUser, createData, DeleteData } from "./functionApi";

function App() {
	const [alldata, setAllData] = React.useState([]);
	const [usersD, setUserD] = React.useState({
		first_name: "",
		last_name: "",
		username: "",
		date_of_birth: "",
	});

	const getData = async () => {
		const myd = await allUser();
		if (myd) {
			setAllData(myd);
		}
		console.log("see data", myd);
		console.log("see data", alldata);
	};

	const onHandleSubmit = async (e) => {
		e.preventDefault();
		const result = await createData(usersD);
		setAllData([...alldata, result]);

		window.location.reload(setUserD(""));
	};

	const removeUser = async (id) => {
		await DeleteData(id);
		const myUser = [...alldata];
		myUser.filter((todo) => todo.id !== id);
		setAllData(myUser);
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<FormHold onSubmit={onHandleSubmit}>
				<InputHold1>
					<Hold>
						{" "}
						<span>First Name</span>
						<input
							value={usersD.first_name}
							onChange={(e) =>
								setUserD({ ...usersD, first_name: e.target.value })
							}
							type='text'
							required={true}
							placeholder='First name'
						/>
					</Hold>
					<Hold>
						{" "}
						<span>Last Name</span>
						<input
							value={usersD.last_name}
							onChange={(e) =>
								setUserD({ ...usersD, last_name: e.target.value })
							}
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
							value={usersD.username}
							onChange={(e) =>
								setUserD({ ...usersD, username: e.target.value })
							}
							type='text'
							required={true}
							placeholder='Username'
						/>
					</Hold>
					<Hold>
						{" "}
						<span>Date of Birth</span>
						<input
							value={usersD.date_of_birth}
							onChange={(e) =>
								setUserD({ ...usersD, date_of_birth: e.target.value })
							}
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

			{alldata.map((props) => (
				<UserHold>
					<Naming>
						{" "}
						<UserIcon>{props.name_prefix}</UserIcon>
						<UserName>{props.username}</UserName>
						<FullName>
							{" "}
							{props.first_name} {props.last_name}{" "}
						</FullName>
					</Naming>
					<DelHold>
						<UserDate>{props.date_of_birth}</UserDate>
						<span>
							<MdDeleteOutline
								style={{ cursor: "pointer" }}
								onClick={() => {
									removeUser(props.username);
								}}
							/>
						</span>
					</DelHold>
				</UserHold>
			))}
		</Container>
	);
}

export default App;

const Naming = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* width: 300px; */
	font-weight: bold;
`;

const UserHold = styled.div`
	width: 700px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
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
const UserName = styled.div`
	margin-left: 20px;
`;
const FullName = styled.div`
	margin-left: 20px;
`;
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
	overflow-y: scroll;
	overflow-x: scroll;
`;
