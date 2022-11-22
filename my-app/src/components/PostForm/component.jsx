import React, {useState} from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';

import Post from "./Post";

import './styles.scss'



const PostsForm = () => {
    const [posts, setPost] = useState([])

    const submitBody = {title: '', body: '', userId: '1'};

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        } else if (!values.body) {
            errors.body = 'Required body ';
        }
        return errors;
    }

    const onSubmit = (values, {setSubmitting,}) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(json => setPost([...posts, json]))
        values.title = "";
        values.body = '';
        setSubmitting(false);
    };


    return (
        <>
            <div className="container text-center">
                <h1 className=''>Enter your post</h1>
                <Formik
                    initialValues={submitBody}
                    validate={validate}
                    onSubmit={onSubmit}

                >
                    {(props) => (
                        <Form className='d-flex wrap' onSubmit={props.handleSubmit}>
                            <Field className='post_100' type="text" name="title"/>
                            <ErrorMessage name="title"/>
                            <Field className='post_100' type="text" name="body"/>
                            <ErrorMessage name="body"/>
                            <Field className='post_25' as='select' name='userId' type='select'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Field>
                            <button className='post_25' type="submit" disabled={props.isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                <div>
                    {posts.length === 0 ? (<span className="post_empty">List is empty</span>) :
                        (<div>
                            {posts.map(post => (
                                    <Post key={post.id}
                                          {...post}
                                    />
                                )
                            )}
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default PostsForm