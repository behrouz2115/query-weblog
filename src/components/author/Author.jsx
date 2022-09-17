import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from '../../graphql/quaries';

const Author = () => {
    const { loading, data, errors } = useQuery(GET_AUTHOR);
    if (loading) return <h3>loading ...</h3>
    if (errors) return <h3>errors</h3>
    console.log(data)
    return (
        <div>
            Author
        </div>
    );
};

export default Author;