const param: string | null = new URLSearchParams(window.location.search).get(
	"fromOld"
);
if (param === "true") {
	alert(
		"Sinut on uudelleenohjattu vanhasta osoitteesta. Sivu toimii samoin kuin ennekin, vain osoite on muuttunut."
	); //alert
} //if
