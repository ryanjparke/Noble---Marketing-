import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
    headline: {
        fontSize: 16,
        paddingTop: 8,
        marginBottom: 8,
        fontWeight: 400,
    },
};

class Controlled extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Adult" value="a">
                    <div>
                        <h2 style={styles.headline}>Assessment One</h2>
                        <p>
                            Tabs are also controllable if you want to programmatically pass them their values.
                            This allows for more functionality in Tabs such as not
                            having any Tab selected or assigning them different values.
            </p>
                    </div>
                </Tab>
                <Tab label="Juvenile" value="b">
                    <div>
                        <h2 style={styles.headline}>Assessment Two</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
            </p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}
export default Controlled;