import React from 'react';
import { useParams } from 'react-router-dom';

const AuthorPage = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            author page
        </div>
    );
};

export default AuthorPage;