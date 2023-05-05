import GoHome from "./Components/BackHome";

export default function NotFoundPage(): JSX.Element {
	return (
		<div className="NotFound">
			<h1> Error</h1>
			<h2>
				404 <br /> Sivua ei löydy
			</h2>
			<br />
			<GoHome />
		</div>
	);
}
