export default function LastSearch(): JSX.Element {
	const lastSearch: any = localStorage
		.getItem("lastSearch")
		?.split('"')
		.join("");
	console.log(lastSearch);

	const lastSearchLink: string = `/?query=${lastSearch}`;

	if (lastSearch == "null") {
		return <></>;
	} else
		return (
			<div className="LastSearch">
				<h2 className="LastSearchTitle">Viimeisin haku:</h2>

				<p>
					<a
						href={lastSearchLink}
						className="whiteLink"
						style={{ textDecoration: "underline" }}>
						{lastSearch}
					</a>
				</p>
			</div>
		); //return
} //LastSearch()
