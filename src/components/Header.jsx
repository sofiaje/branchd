const Header = ({companys}) => {

    const goTo = (e) => {
        const element = document.getElementById(e.target.value)
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });
    }

    return (
        <header id="header" className='fixed left-0 top-0 w-full bg-gray-100 z-10'>
            <select onChange={(e) => goTo(e)} className='border rounded-lg p-3 m-3' name="companys">
                {companys.map((company, i) => {
                    return (
                        <option key={i} value={company.id}>{company.name}</option>
                    )
                })}
            </select>
        </header>
    );
}

export default Header;