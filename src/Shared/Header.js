import React from "react";
import Search from "./../Shared/Search";
import Nav from "./../Shared/Nav";

const Header = () => {
	return (
		<>
			<div className="clearfix">
				<div className="float-left">
					<span>5th Zone</span>
				</div>
				<div className="float-left">
					<Search />
				</div>
				<div className="float-right">
					<Nav />
				</div>
			</div>
		</>
	);
};

export default Header;
