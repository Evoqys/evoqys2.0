import React from 'react';
import Title from './Title/Title';

const SectionLayout:React.FC<{title:string, id:string}> = (props: any) => {
    return (
        <div className='pt-5 my-5' id={props.id}>
            <Title>{props.title}</Title>
            {props.children}
        </div>
     );
};

export default SectionLayout;
