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

    priceFilter() {

    }

    toggleCheckbox() {

    }

    render() {
        return (
            <form>
                <div className="checkbox1">
                    <label>
                        <input type="checkbox" handleCheckboxChange={this.toggleCheckbox()} name="Price1"
                               value="option1"/>
                        Price Under $10
                    </label>
                </div>
                <div className="checkbox2">
                    <label>
                        <input type="checkbox" handleCheckboxChange={this.toggleCheckbox()} name="Price2"
                               value="option2"/>
                        Between $10-$20
                    </label>
                </div>
                <div className="checkbox3">
                    <label>
                        <input type="checkbox" handleCheckboxChange={this.toggleCheckbox()} name="Price3"
                               value="option3"/>
                        $20+
                    </label>
                </div>
            </form>
        );
    }
}

export default Price;