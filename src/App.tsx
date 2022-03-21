import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./components/Faq";
import Landing from "./components/Landing";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
function App() {
	return (
		<BrowserRouter>
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/faq" element={<Faq />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
