import UnivNav from "./Navigasi/avdNav";
import Home from "./Home";
import Header from "./Navigasi/header";

export default function MainLayout() {
    return (
        <>
            <Home />
            <Header />
            <UnivNav />
        </>
    );
}