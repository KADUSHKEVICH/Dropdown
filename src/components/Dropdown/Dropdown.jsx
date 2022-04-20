import React, {useState} from 'react';
import '../../App.css'

const Dropdown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false)
    const options = ['React', 'Vue', 'Angular', 'U mum']
    return (
        <div className='dropdown'>
            <div className="dropdown-input" onClick={e => setIsActive(!isActive)}>
                {selected}
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                            <div onClick={e => {
                                setSelected(option)
                                setIsActive(false)
                            }}
                                 className="dropdown-item">
                                {option}
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    )
}

export default Dropdown;