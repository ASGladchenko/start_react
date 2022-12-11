import {selectPostId, selectPosts} from "../../../store/posts/selectors";
import {removePost} from "../../../store/posts/actions";
import {connect} from "react-redux";


const Post = ({id, body,title, removePost, posts }) =>(
    <li key={id}>
        ID : {id} |   {body} | {title}
        <button onClick={()=>removePost(id)}>Remove</button>
   </li>
)
const mapStateToProps = state => ({
        posts: selectPosts(state)
    }
)

const mapDispatchToProps = {
    removePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)