import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./Pages/Home";


function App() {
    return (
        <ThemeProvider>
            <Home></Home>
        </ThemeProvider>
    );
}

export default App;
