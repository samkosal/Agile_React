import './Header.css';

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-logo-title">
                <img className="header-logo" src="src/assets/Record_Label.jpg" alt="Wavelength Records Logo" />
                <div>
                    <h1 className="header-title">Wavelength Records</h1>
                    <h2 className="header-subtitle">Independent Label &bull; Seattle, WA</h2>
                </div>
            </div>
        </header>
    );
}