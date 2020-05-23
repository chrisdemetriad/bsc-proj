import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom";
import Header from "./Shared/Header";
import PromoBanner from "./Shared/PromoBanner";
import InfoBanner from "./Shared/InfoBanner";
import MainLayout from "./Shared/MainLayout";
import { BaseProvider } from "./Shared/BaseContext";

const Home = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<BaseProvider>
			<MainLayout>
				<Header />
				<PromoBanner />
				<InfoBanner />
				{currentUser && <Redirect to="/adverts" />}
			</MainLayout>
		</BaseProvider>
	);
};

export default Home;
