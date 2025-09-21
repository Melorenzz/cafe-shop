import AboutUs from "./pages/AboutUs.tsx";
import {Route, Routes} from "react-router";
import AdminPage from "./pages/Admin.tsx";

export default function App() {
	return (
        <>
            <main>
                <Routes>
                    <Route path='/admin' element={<AdminPage /> } />
                    <Route path='/' element={<AboutUs /> } />
                </Routes>

            </main>
        </>
	)
}