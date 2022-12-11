import {useEffect} from "react";

import {connect} from "react-redux";

import {setPosts} from "../../store/posts/actions";

import {selectPosts} from "../../store/posts/selectors";


import Post from "./Post";

import "./styles.scss"

const Posts = ({setPosts, posts}) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    return (
        <>
            <h1>Post Redux</h1>
            <div className="container">
                {posts.map(post => <Post key={post.id} {...post}/>)}
            </div>
        </>

    )
}
const mapStateToProps = state => ({
        posts: selectPosts(state),
    }
)

const mapDispatchToProps = {
    setPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)