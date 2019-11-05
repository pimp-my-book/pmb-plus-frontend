import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {

    const {

        className,
        value,
        onChange,
        small

    } = props
    return (
        <input
            ref={ref}
            className={`${className} 
            ${small ? 'border font-body border-grey py-2 rounded-sm focus:outline-none w-16' : 'border font-body border-grey py-2 px-5 rounded-sm focus:outline-none'} `}
            value={value}
            onChange={onChange}
            {...props}
        />
    )


})


export default Input