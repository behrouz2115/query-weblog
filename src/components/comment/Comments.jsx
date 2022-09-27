import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_COMMENT } from '../../graphql/quaries';

const Comments = ({slug}) => {
    const { loading, data, errors } =useQuery(GET_POST_COMMENT, {variables:{slug}});
    console.log(data)
    return (
        <div>
            comment
        </div>
    );
};

export default Comments;