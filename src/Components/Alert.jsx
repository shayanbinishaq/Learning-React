import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (    
        props.Alert && (
            <div className={`alert alert-${props.Alert.Type} alert-dismissible fade show custom-alert`} role="alert">
                <strong>{capitalize(props.Alert.Type)}</strong>:{props.Alert.msg}
                <button type="button" className="btn-close" onClick={() => props.setAlert(null)} aria-label="Close"></button>
            </div>
        )
  )
}
export default Alert