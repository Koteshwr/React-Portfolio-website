import "../Navbar/Navbar.css"
const Navbar = () => {
    const handleClick = ()=>{
        const menuBtn = document.querySelector(".menu-btn");
                            const menu = document.querySelector(".menu");

                            menuBtn.firstElementChild.classList.toggle("fa-times");
                            menu.classList.toggle("menu-open");
    }
    return (
        <nav className="navbar">
            <div className="container">
                <a href="index.html" className="brand">Koteshwr_rao</a>
                <div className="menu">
                    <a href="index.html" className="brand">Koteshwr_rao</a>
                    <div>
                        <a href="#" onClick={handleClick}>Home</a>
                        <a href="#about" onClick={handleClick}>About</a>
                        <a href="#skills"onClick={handleClick}>Skills</a>
                        <a href="#projects"onClick={handleClick}>Projects</a>
                        <a href="#contact"onClick={handleClick}>Contact Me</a>
                    </div>
                    <a target="_blank" href="https://drive.google.com/file/d/1NMO9edrSL4Wa7Tiwi1y_2oKILwqIpGUG/view?usp=drive_link" className="btn">View CV <i className="fa-solid fa-arrow-up-right-from-square" ></i></a>
                </div>
                <button className="menu-btn" onClick={handleClick} ><i className="fas fa-bars"></i></button>
            </div>
        </nav>
    )
}

export default Navbar;