import React from 'react'

const Description = (props) => {
  return (
    <div>
        <h3 className="text-xl font-semibold dark:text-white tracking-tight mb-1 mt-4">            Description
        </h3>
        <p className="text-gray-700 dark:text-gray-400">
            {props.description}
        </p>
    </div>
  )
}

export default Description
