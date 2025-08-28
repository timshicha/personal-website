import React from "react"

const SolidDot = (props) => {
    return <div {...props} className="w-3 h-3 rounded-full bg-gray-600 inline-block mx-1"></div>
}

const EmptyDot = (props) => {
    return <div {...props} className="w-3 h-3 rounded-full border border-gray-600 inline-block mx-1"></div>
}

export { SolidDot, EmptyDot };