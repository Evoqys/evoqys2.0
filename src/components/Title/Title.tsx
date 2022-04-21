import React from 'react';
import './Title.scss';

const Title: React.FC = (props: any) => {
    return (
        <div className='title mb-5'>
            <h2 className='text-white'>{props.children}</h2>
            <div className='tint'/>
        </div>
    );
};

export default Title;
