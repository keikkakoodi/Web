import { Component, Suspense, lazy, useEffect } from "react";

import LastSearch from "./LastSearch";
const QueriedKeikka = lazy(() => import("./QueriedKeikka"));
import Search from "./Search";

import "./HomePage.css";
export default function HomePage(): JSX.Element {
	useEffect(() => {
		const param: string | null = new URLSearchParams(
			window.location.search
		).get("fromOld");
		if (param === "true") {
			alert(
				"Sinut on uudelleenohjattu vanhasta osoitteesta. Sivu toimii samoin kuin ennekin, vain osoite on muuttunut."
			);
			window.location.href = "/";
		} //if
	});

	const urlQuery = new URLSearchParams(window.location.search).get("query");

	if (urlQuery !== null) {
		return (
			<div className="App">
				<Search />
				<Suspense
					fallback={
						<h1 style={{ fontFamily: "Roboto", fontSize: "16px" }}>
							Loading ...
						</h1>
					}>
					<QueriedKeikka />
				</Suspense>

				<LastSearch />
			</div>
		); //return
	} else
		return (
			<div className="Container">
				<div className="App">
					<Search />
					<LastSearch />
				</div>
			</div>
		); //else return
}
