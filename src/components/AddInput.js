import React from 'react'

function AddInput({labelString ,name,type,placeholder,register,errors,validationOptions}) {
    return (
        <div className="add__input-field">
        <label className="add__label">{labelString}</label>
        <input
          className="add__input"
          type={type}
          placeholder={placeholder}
          name={name}
          ref={register(validationOptions)}
        />
        {errors.lat ? (
          <span className="add_error">{errors.lat.message}</span>
        ) : (
          <span>✔</span>
        )}
      </div>
    )
}

export default AddInput
