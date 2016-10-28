/**
 * Created by Victor on 10/27/2016.
 */
import React from 'react'

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.priceFilter = this.priceFilter.bind(this);
        this.state = {
            price1: false,
            price2: false,
            price3: false,
        }
    }
    
    handClick() {
        if(this.refs.Price1.checked){
            this.state.price1 = true;
        }
        else if (this.refs.Price2.checked){
            this.state.price2 = true;
        }
        else if (this.refs.Price3.checked){
            this.state.price3 = true;
        }
        this.props.onHandlePrice({price1, price2, price3});
    }

    render() {
        return (
            <form>
                <div className="checkbox1">
                    <label>
                        <input type="checkbox" handleCheckboxChange={this.toggleCheckbox()} ref = "Price1" checked = {this.state.price[0]}
                               value="option1"/>
                        Price Under $10
                    </label>
                </div>
                <div className="checkbox2">
                    <label>
                        <input type="checkbox" handleCheckboxChange={this.toggleCheckbox()} ref="Price2" checked = {this.state.price[1]}
                               value="option2"/>
                        Between $10-$20
                    </label>
                </div>
                <div className="checkbox3">
                    <label>
                        <input type="checkbox" handleCheckboxChange={this.toggleCheckbox()} ref="Price3" checked = {this.state.price[2]}
                               value="option3"/>
                        $20+
                    </label>
                </div>
            </form>
        );
    }
}