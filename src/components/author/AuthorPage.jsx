import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../../graphql/quaries';

const AuthorPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
        variables:{ slug }
    });
    if (loading) return <h4>Loading ...</h4>
    if (errors) return <h4>error();</h4>
    console.log(data)
    return (
        <div>
            author page
        </div>
    );
};

export default AuthorPage;