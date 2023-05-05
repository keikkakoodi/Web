import { useState } from "react";

export default function Search(): JSX.Element {
	const [userSearch, setUserSearch] = useState();

	const query = new URLSearchParams(window.location.search).get("query");

	function handleSearch(event: any) {
		if (userSearch != null) {
			event.preventDefault();
			console.log(`Haku vastaanotettu:${userSearch}`);
			localStorage.setItem("lastSearch", JSON.stringify(query));
			window.location.replace(`?query=${userSearch}`);
		} else {
			event.preventDefault();
			alert("Syötä haettava koodi!");
		}
	}

	return (
		<div className="SearchUI">
			<form onSubmit={handleSearch}>
				<h2 id="searchTitle">Hae tehtäväkoodia:</h2>
				<br />
				<p id="inputRules">
					Mikäli tehtäväkoodi sisältää kiireellisyysluokan
					<br />
					(kirjain A,B,C,D) sitä EI tule syöttää
				</p>
				<input onChange={(e: any) => setUserSearch(e.target.value)} />
				<br />
				<input
					id="submitBtn"
					type="submit"
				/>
			</form>
		</div> //.SearchUI
	);
}
