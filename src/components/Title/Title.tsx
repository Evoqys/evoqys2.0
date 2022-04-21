import React from 'react';

const Title:React.FC = (props: any) => {
    return (
        <div>
            {props.children}
        </div>
     );
};

export default Title;
