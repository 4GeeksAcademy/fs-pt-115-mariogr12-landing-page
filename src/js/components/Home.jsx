import React from "react";

//include images into your bundle
import defaultCardImage from "../../img/500x325.png";
import { MiNavbar } from "./MiNavbar";
import { MiCard } from "./MiCard";
import { FinPagina } from "./FinPagina";
import { Jumbotron } from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid w-100 p-0">
			<MiNavbar />

			<Jumbotron />

			<div className="row mx-3 mb-3">
				<MiCard
					image={defaultCardImage}
					title="Título"
					text="Esto es el cuerpo de mi carta"
					buttonLabel="Ir al sitio web" />
				<MiCard
					image={defaultCardImage}
					title="Título"
					text="Esto es el cuerpo de mi carta"
					buttonLabel="Ir al sitio web" />
				<MiCard
					image={defaultCardImage}
					title="Título"
					text="Esto es el cuerpo de mi carta"
					buttonLabel="Ir al sitio web" />
				<MiCard
					image={defaultCardImage}
					title="Título"
					text="Esto es el cuerpo de mi carta"
					buttonLabel="Ir al sitio web" />
			</div>

			<FinPagina />
		</div>
	);
};

export default Home;