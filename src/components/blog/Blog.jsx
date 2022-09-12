import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../graphql/quaries';

const Blog = () => {
    const { loading, data, errors } =useQuery(GET_BLOGS_INFO);
    console.log (data)
    if (loading) return <h4>Loading ...</h4>
    if (errors) return <h4>error();</h4>
    return (
        <div>
            blog
        </div>
    );
};

export default Blog;