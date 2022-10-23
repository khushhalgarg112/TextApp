import React from 'react'

export default function Alert(props) {
    const Capital = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.art && <div className={`alert alert-${props.art.type} alert-dismissible fade show my-2`} role="alert">
            <strong>{Capital(props.art.type)}</strong>: {props.art.msg}
        </div>

    )
}
