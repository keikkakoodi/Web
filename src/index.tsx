import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

//Styles
import "./global.css";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

//Pages
const HomePage = lazy(() => import("./Home/HomePage"));
const InfoPage = lazy(() => import("./Info/InfoPage"));
const NotFoundPage = lazy(() => import("./404"));

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<Header />
		<div className="container">
			<Router>
				<Routes>
					<Route
						index
						element={
							<Suspense fallback={<Loading />}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route
						path="about"
						element={
							<Suspense fallback={<Loading />}>
								<InfoPage />
							</Suspense>
						}
					/>

					<Route
						path="info"
						element={<Navigate to="/about" />}
					/>

					<Route
						path="*"
						element={
							<Suspense fallback={<Loading />}>
								<NotFoundPage />
							</Suspense>
						}
					/>
				</Routes>
			</Router>

			<Footer />
		</div>
	</React.StrictMode>
);
