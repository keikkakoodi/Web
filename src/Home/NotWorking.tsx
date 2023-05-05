export default function NotWorking(): JSX.Element {
	const notWorkingAlert = () => {
		alert(
			"Jos et näe tulosta haun jälkeen, koodia ei ole olemassa tai se puuttuu tietokannasta. Jos epäilet että sivu ei toimi, hae koodia 100."
		);
	};
	return (
		<div className="NotWorking">
			<a
				id="notWorking"
				onClick={notWorkingAlert}>
				<p>Eikö toimi?</p>
			</a>
		</div>
	);
}
