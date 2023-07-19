import desktop from "../images/bg-header-desktop.svg";
const Header = () => {
    return (
        <header className="bg-primary-DarkCyan h-28 md:h-auto">
            <img src={desktop} alt="banner" className="h-full" />
        </header>
    );
};

export default Header;
