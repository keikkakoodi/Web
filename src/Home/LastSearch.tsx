export default function LastSearch(): JSX.Element {
	const storedLastSearch: any = localStorage.getItem("lastSearch");
	console.log(storedLastSearch);

	const lastSearch = parseInt(storedLastSearch);

	const lastSearchLink: string = `/?query=${lastSearch}`;

	if (isNaN(lastSearch)) {
		return <></>;
	} else
		return (
			<div className="LastSearch">
				<h2 className="LastSearchTitle">Viimeisin haku:</h2>

				<p>
					<a
						href={lastSearchLink}
						className="whiteLink"
						style={{ textDecoration: "none" }}>
						{lastSearch}
					</a>
				</p>
			</div>
		); //return
} //LastSearch()
