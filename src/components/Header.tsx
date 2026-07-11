import "./css/Header.css";

function Header({ title }: { title: string }) {
    return (
        <header className = "header_text">
            <p className = "header_title">ScrapInfo {title}</p>
            <p className = "header_subtitle">See your daily objects</p>
            <p className = "header_date"> Day {new Date().toLocaleDateString()}</p>
        </header>
    );
}

export default Header;