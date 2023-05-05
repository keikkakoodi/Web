export default function Footer(): JSX.Element {
	return (
		<footer>
			<a href="/about">
				<p id="abtLink">Mikä on keikkakoodi?</p>
			</a>

			<h3>
				&copy;{" "}
				<a
					href="https://github.com/piuhahelvetti"
					id="footerCopy">
					Leevi Saastamoinen
				</a>{" "}
				{new Date().getFullYear()}
			</h3>
			<a
				id="sourceLink"
				href="https://github.com/piuhahelvetti/keikkakoodi"
				target="_blank"
				rel="noreferrer noopener"></a>
		</footer>
	);
}
