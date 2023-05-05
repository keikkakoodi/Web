import NotWorking from "./NotWorking";

export default function QueriedKeikka(): JSX.Element {
	const Keikat = require("../data/Keikat.json");
	const query = new URLSearchParams(window.location.search).get("query");

	const keikkaDesc = Keikat.filter((keikka: any) => keikka.id == query).map(
		(filteredKeikka: any) => {
			return filteredKeikka.desc;
		}
	);

	const urgencyClassText = Keikat.filter(
		(keikka: any) => keikka.id == query
	).map((filteredKeikka: any) => {
		if (filteredKeikka.hasUrgencyClasses === true)
			return (
				"Mahdolliset kiireellisyysluokat: " +
				filteredKeikka.urgencyClasses.join(", ")
			);
	}); //.map

	if (query !== null) {
		return (
			<div className="keikkaDisplay">
				<p className="inline">
					Tehtävä{" "}
					<p
						className="inline"
						id="queriedKeikka">
						{query}
					</p>
					: {keikkaDesc}
				</p>
				<br />
				<p>{urgencyClassText}</p>
				<NotWorking />
			</div>
		);
	} else return <></>;
}
