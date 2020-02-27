import React from 'react'

function InputCard({item,deleteCompany}) {
    return (
        <ul className="list__box">
        <li className="text__field">{item.businessId}</li>
        <li className="text__field">{item.name}</li>
        <li className="text__field">{item.lat}</li>
        <li className="text__field">{item.lng}</li>
        <li className="text__field">{item.address}</li>
        <li className="text__field">{item.postalCode}</li>
        <li className="text__field">{item.phoneNumber}</li>
        <li className="text__field">{item.url}</li>
        <li className="text__field">{item.website}</li>
        <li className="text__field">{item.email}</li>
        <li className="text__field">
          <button onClick={() => deleteCompany(item)}>delete</button>
        </li>
      </ul>
    )
}

export default InputCard
