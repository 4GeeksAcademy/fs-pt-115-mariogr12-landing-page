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
		<>
			<MiNavbar />

			<Jumbotron />

			<div className="container">

				<div className="row mb-3 justify-content-between">
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

			</div>

			<FinPagina />
		</>
	);
};

export default Home;