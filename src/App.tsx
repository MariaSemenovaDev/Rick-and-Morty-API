import {HomePage} from "./pages/HomePage/HomePage";
import {Header} from "./common/Header";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage";
import {LocationPage} from "./pages/LocationPage/LocationPage";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage";
import {Route, Routes} from "react-router";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={ <HomePage/>} />
            </Routes>
            <Routes>
                <Route path="/characters" element={ <CharacterPage/>} />
            </Routes>
            <Routes>
                <Route path="/locations" element={  <LocationPage/>} />
            </Routes>
            <Routes>
                <Route path="/episodes" element={  <EpisodePage/>} />
            </Routes>
        </div>
    )
}

export default App