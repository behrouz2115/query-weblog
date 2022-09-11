import React from 'react';
import Author from '../author/Author';
import Blog from '../blog/Blog';

const HomePage = () => {
    return (
        <div>
            <Blog/>
            <Author/>
        </div>
    );
};

export default HomePage;