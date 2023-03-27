import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h5 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white uppercase">
            {props.title}
        </h5>
    </div>
  )
}

Header.defaultProps = {
    title: 'Test wrong title',
}

export default Header