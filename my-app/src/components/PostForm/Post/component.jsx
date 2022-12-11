import './styles.scss'

const Post = ({title,body,id,userId}) => {
    return (
        <div className='d-flex justify-between wrap post'>
            <h3 className="post_100">Title : {title}</h3>
            <p >Post id: {id}</p>
            <p className='post_body'>{body}</p>
            <p>User Id:{userId}</p>

        </div>
    )
}

export default Post