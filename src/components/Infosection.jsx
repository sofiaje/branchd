const Infosection = (props) => {
    const { name, body, contact, competences, applyEmail, contactEmail, contactWeb, hire, lia, links } = props

    return (
        <div>
            <h1 className="py-5 text-2xl text-green-600 font-raleway">{name}</h1>
            <p className="font-bold">Om oss/att jobba hos oss:</p>
            <p className="py-3">{body}</p>
            <p className="py-3 flex flex-col gap-2">
                <span>{contact}</span>
                {contactEmail && <a className="italic" href={`mailto:${contactEmail}`}>{contactEmail}</a>}
                {applyEmail && <a className="italic" href={`mailto:${applyEmail}`}>{applyEmail}</a>}
                {contactWeb && <a className="underline" href={`${contactWeb}`}>{name}</a>}
            </p>

            {competences && <p className="py-3 flex flex-col "><span className="font-bold">Kompetenser vi söker:</span> <span>{competences}</span></p>}
            <p className="py-3 flex flex-col">
                <span>{hire && "Vi vill anställa efter examen."}</span>
                <span>{lia && "Vi tar emot LIA 2023 / 2024."}</span>
            </p>

            <p className="py-3 flex flex-col">
                {links.map((link, i) => {
                    return <span key={i}><a href={`${link.url}`}>{link.name}</a></span>
                })}
            </p>
        </div>
    );
}

export default Infosection;