import { v4 as uuidv4 } from 'uuid';


const Commentsection = (props) => {
    const { companyComments, userComments, setUserComments, id } = props
    
    // save new comment in localStorage
    const saveComment = (id) => {
        const inputField = document.getElementById(`comment${id}`)
        const comment = {
            companyId: id,
            commentBody: inputField.value,
            commentId: uuidv4()
        }
        setUserComments(prevState => [...prevState, comment])
        inputField.value = ""
    }

    // remove comment from localStorage
    const removeComment = (e) => {
        const newArray = userComments.filter(comment => comment.commentId !== e.target.getAttribute("data-commentid"))
        setUserComments(newArray)
    }

    // map all comments
    const comments = companyComments.map((comment, i) => {
        return (
            <div key={i} className="my-2  flex justify-between items-start gap-4 bg-gray-50 rounded-lg">
                <p className="max-w-lg py-6 px-3">{comment.commentBody}</p>
                <button data-commentid={comment.commentId} className="text-red-700 py-2 px-4" onClick={(e) => removeComment(e)}>-</button>
            </div>
        )
    })


    return ( 
        <div className="py-1">
            {companyComments.length > 0 &&
                <div className="py-2">
                {comments}
            </div>}
                <div className="flex flex-col pt-4">
                    <p>Add comment:</p>
                    <textarea type="text" id={`comment${id}`} placeholder="Comment" className="p-2 border sm:w-2/3" />
                    <button className="py-2 px-2 mt-2 mb-6 border rounded-lg self-start" onClick={() => saveComment(id)}>Add</button>
                </div>
            </div>
     );
}
 
export default Commentsection;