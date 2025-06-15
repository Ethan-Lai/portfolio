import React from 'react'

const ToolItem = ({ tool }) => {
    return (
        <div className='flex flex-col items-center p-4'>
            <div 
                className="w-15 h-15"
                style={{
                    backgroundColor: tool.color,
                    mask: `url(${tool.logo}) center/contain no-repeat`,
                    WebkitMask: `url(${tool.logo}) center/contain no-repeat`
                }}
            />
            <span className='text-sm mt-2 dark:text-slate-300'>{tool.name}</span>
        </div>
    )
}

export default ToolItem