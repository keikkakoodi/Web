export default function GoHome(): JSX.Element {
	function backHome() {
		window.location.href = "/";
	}

	return (
		<button
			id="GoHome"
			onClick={backHome}>
			Takaisin etusivulle
		</button>
	);
}
