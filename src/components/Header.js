import React, {useState} from "react";

const Header = () => {
	const currDate = new Date().toLocaleDateString();
	let time = new Date().toLocaleTimeString();

	const [ctime, setCtime] = useState(time);
	const UpdatedTime = () => {
		time = new Date().toLocaleTimeString();
		setCtime(time);
	};
	setInterval(UpdatedTime, 1000);
	return(
		<>
	<h2 style={{ marginTop:'10px'}}>Expense Tracker</h2>
	<h4 style={{ marginTop:'10px'}} >Date : {currDate}</h4>
	<p style={{ marginTop:'10px'}} >{ctime}</p>
	</>
	)
};
export default Header;
