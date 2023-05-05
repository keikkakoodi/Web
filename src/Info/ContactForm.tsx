import { useForm, ValidationError } from "@formspree/react";
function Form() {
	const [state, handleSubmit] = useForm("mqkonpjy");
	if (state.succeeded) {
		return <p>Kiitos viestistä!</p>;
	}
	return (
		<div className="contact">
			<h2>Ota yhteyttä tai anna palautetta</h2>

			<form onSubmit={handleSubmit}>
				{" "}
				<label htmlFor="email">Sähköposti:</label>
				<br />
				<input
					id="email"
					type="email"
					name="email"
					placeholder="esimerkki@domain.com"
				/>{" "}
				<br />
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
				<br />
				<textarea
					id="message"
					name="message"
					placeholder="Jätä viesti"
				/>
				<br />
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<br />
				<button
					type="submit"
					disabled={state.submitting}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default function ContantForm(): JSX.Element {
	return <Form />;
}
