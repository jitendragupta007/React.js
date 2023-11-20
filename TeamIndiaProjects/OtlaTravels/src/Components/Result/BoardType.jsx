import React from 'react'

const BoardType = ({element}) => {
  return (
    
<li>
                  <label>
                    <input
                      type="checkbox"
                      className="mealtype"
                      data-value={element?.code}
                    />
                    {element?.text}<span className="checkspan"></span>
                  </label>
                </li>

  )
}

export default BoardType
