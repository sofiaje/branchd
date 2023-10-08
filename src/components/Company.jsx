import { useState } from "react";
import Commentsection from "./Commentsection";
import Infosection from "./Infosection";

const Company = (props) => {
    const { id } = props.company
    const comp = props.company
    const { userComments, setUserComments } = props
    const [showComments, setShowComments] = useState(false);

    const handleClick = () => {
        setShowComments(prevState => !prevState )
    }

    const companyComments = userComments.filter(comment => id === comment.companyId)
    const currentComments = companyComments.length

    return (
        <div id={id} className="p-5 m-3 border rounded-lg shadow-lg w-11/12">

            <Infosection {...comp} />
            <button className="py-2 px-3 my-4 mb-6 bg-green-900 text-white rounded-lg" onClick={() => { handleClick() }}>{currentComments} {companyComments.length !== 1 ? "comments" : "comment"}</button>

            {showComments && <Commentsection id={id} companyComments={companyComments} userComments={userComments} setUserComments={setUserComments} />}
            
        </div>
    );
}

export default Company
