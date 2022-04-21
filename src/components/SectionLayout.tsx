import React from 'react';
import Title from './Title/Title';

const SectionLayout:React.FC<{title:string}> = (props: any) => {
    return (
        <div className='pt-5'>
            <Title>{props.title}</Title>
            {props.children}
        </div>
     );
};

export default SectionLayout;
