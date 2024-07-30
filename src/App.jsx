import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
    return (
        <>
            {/* Dark Theme */}
            <div className="block fixed left-0 top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
            </div>
            {/* Light Theme */}
            {/* <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}

export default App;
