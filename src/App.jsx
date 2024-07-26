import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    return (
        <>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
            </div>
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}

export default App;
