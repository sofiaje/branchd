const Infosection = (props) => {
    const { name, body, contact, competences, applyEmail, contactEmail, contactWeb, hire, lia, links } = props

    return (
        <div>
            <h1 className="py-5 text-2xl text-green-600 font-raleway">{name}</h1>
            <p className="font-bold">Om oss/att jobba hos oss:</p>
            <p className="pb-4 pt-1">{body}</p>

            <p className="pt-3 font-bold">Kontakt:</p>
            <p className="pb-4 pt-1 flex flex-col gap-2">
                <span>{contact}</span>
                {contactEmail && <a className="italic" href={`mailto:${contactEmail}`}>{contactEmail}</a>}
                {applyEmail && <a className="italic" href={`mailto:${applyEmail}`}>{applyEmail}</a>}
                {contactWeb && <a className="border-b border-black" href={`${contactWeb}`}>{name}</a>}
            </p>

            <p className="pt-3 font-bold">Vi är intresserade av att:</p>
            {competences && <p className="pb-3 flex flex-col "><span className="font-bold">Kompetenser vi söker:</span> <span>{competences}</span></p>}
            <p className="pb-4 pt-1 flex flex-col">
                <span>{hire && "Anställa efter examen"}</span>
                <span>{lia && "Ta emot LIA 2023 / 2024"}</span>
            </p>

            <p className="pt-3 font-bold">Mer om oss:</p>
            <p className="pb-4 pt-1 flex flex-col">
                {links.map((link, i) => {
                    return <span key={i}><a className="border-b border-black" href={`${link.url}`}>{link.name}</a></span>
                })}
            </p>
        </div>
    );
}

export default Infosection;