import React from 'react'

const Layout = (props: any) => {
    return (
        <div id="layout" className="grid grid-cols-12">
            {props.children}
        </div>
    )
}

export default Layout
