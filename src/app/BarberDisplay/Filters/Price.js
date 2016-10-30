/**
 * Created by Victor on 10/27/2016.
 */
import React from 'react'

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onHandlePrice(
            this.refs.Price1.checked,
            this.refs.Price2.checked,
            this.refs.Price3.checked
        );
    }

    render() {
        return (
            <form>
                <div className="checkbox1">
                    <label>
                        <input type="checkbox" onChange={this.handleClick} ref="Price1" value="option1" checked = {this.props.prices[0]}/>
                        Price Under $10
                    </label>
                </div>
                <div className="checkbox2">
                    <label>
                        <input type="checkbox" onChange={this.handleClick} ref="Price2" value="option2" checked = {this.props.prices[1]}/>
                        Between $10-$20
                    </label>
                </div>
                <div className="checkbox3">
                    <label>
                        <input type="checkbox" onChange={this.handleClick} ref="Price3" value="option3" checked = {this.props.prices[2]}/>
                        $20+
                    </label>
                </div>
            </form>
        );
    }
}

export default Price;