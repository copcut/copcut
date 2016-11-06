import React from 'react'
import Dropdown from 'react-dropdown'

const options = [
    'All cuts', 'Taper', 'Fade', 'Buzzcut', 'Bowlcut'
]

class Hairstyle extends React.Component{

    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(){
        this.props.onHandleHairstyle(this.refs.Dropdown.value);
    }

    render(){
        return(
            <Dropdown
                options={options}
                ref = "Dropdown"
                onChange={this.onSelect}
                value={this.props.hairstyle}
                placeholder={this.props.hairstyle}
            />
        );
    }
}
export default Hairstyle;