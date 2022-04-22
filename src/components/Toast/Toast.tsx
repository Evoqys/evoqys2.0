import React from 'react';
import './Toast.scss';

const Toast: React.FC<{ message: string, variant: string, onClose: () => void }> = ({ message, variant, onClose }) => {
    setTimeout(() => {
        if (onClose) {
            onClose();
        }
    }, 20000);
    const backgroundColor = variant === 'error' ? '#FC0E3B' : '#26ae60';
    return (
        <div style={{ background: backgroundColor }} className='eq-toast'>
            {message}
        </div>
    );
};
export default Toast;
