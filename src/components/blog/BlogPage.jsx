import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { POST_INFO } from '../../graphql/quaries';
import Loader from '../shared/Loader';


const BlogPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(POST_INFO, {
        variables: {slug}
    });
    if (loading) return <Loader/>
    if (errors) return <h4>error</h4>
    console.log(data)
    return (
        <div>
            blog pages
        </div>
    );
};

export default BlogPage;