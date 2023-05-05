import GoHome from "../Components/BackHome";
import ContantForm from "./ContactForm";

import "./InfoPage.css";

export default function InfoPage(): JSX.Element {
	return (
		<div className="Info">
			<h2>Mikä on keikkakoodi?</h2>

			<p id="desc">
				Keikkakoodi on avoimen lähdekoodin verkkosovellus jonka avulla voi hakea
				pelastustoimen ja ensihoidon tehtäviä tehtäväkoodin (esim. 103)
				perusteella.
				<br />
				Keikkakoodi on kehitetty sivuprojektina harrastelevan koodarin ja
				palokuntanuoren toimesta.
			</p>
			<a
				href="https://github.com/saastamo1n/keikkakoodi"
				id="gitLink"
				rel="noreferrer noopener"
				target="_blank">
				Lähdekoodi (GitHub)
			</a>

			<h3>Lähteet:</h3>

			<p>
				<a
					className="whiteLink"
					href="https://fi.wikipedia.org/wiki/Luettelo_h%C3%A4t%C3%A4keskuksen_teht%C3%A4v%C3%A4luokista"
					target="_blank"
					rel="noreferrer">
					Wikipedia. Luettelo hätäkeskuksen tehtäväluokista.
				</a>
			</p>

			<h3 className="whiteLink">Käytetyt avoimen lähdekoodin lisenssit:</h3>

			<div className="Licenses">
				<p>
					<a
						href="https://reactjs.org"
						id="licensesLink">
						React
					</a>
					<br />
					<a
						href="https://reactjs.org"
						id="licensesLink">
						Typescript
					</a>
					<br />
					<a
						href="https://reactjs.org"
						id="licensesLink">
						React Router
					</a>
				</p>
				<br />
			</div>

			<ContantForm />

			<GoHome />
		</div>
	);
}
