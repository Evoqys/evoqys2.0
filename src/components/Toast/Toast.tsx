import React from 'react';

const Toast: React.FC<{ message: string, variant: string, onClose: () => void }> = ({ message, variant, onClose }) => {
    setTimeout(() => {
        if (onClose) {
            onClose();
        }
    }, 3000);
    const backgroundColor = variant === 'error' ? '#FC0E3B' : '#26ae60';
    return (
        <div style={{ background: backgroundColor }} className='eq-toast'>
            {message}
        </div>
    );
};
export default Toast;
