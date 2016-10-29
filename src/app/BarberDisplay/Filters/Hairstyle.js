import React from 'react'
import Dropdown from 'react-dropdown'

class Hairstyle extends React.Component{
    render() {
        return (
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        );
    }
}

export default Hairstyle;