import React from 'react'

const LBEntry = ({field1, field2, field3}) => {
  return (
    <div className="LBEntry">
        <span className="LBEntry-Field1">{field1}</span>
        <span className="LBEntry-Field2">{field2}</span>
        <span className="LBEntry-Field3">{field3}</span>
    </div>
  )
}

export default LBEntry