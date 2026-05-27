import Navigation from "./Navigation.jsx";

const Header = ({changePage}) => {
    return (
        <header className="rounded-t-3xl bg-gray-700/60">
            <Navigation />
            <h1 className="text-center fs-4xl py-6">Luke Skywalker</h1>
        </header>
    )
}

export default Header;