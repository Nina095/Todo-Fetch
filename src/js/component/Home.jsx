import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "bootstrap"
import TodosList from "./TodosList.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState(null)
	useEffect (() => {
		axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {setTodos(result.data);
	});
	}, []);
	return <div>{todos ? <TodosList todos={todos} /> : <div>no todos</div>  }</div>;
}

export default Home;
