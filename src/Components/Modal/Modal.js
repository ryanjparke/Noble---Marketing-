import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { FloatingActionButton } from 'material-ui';

const styles = {
    headlineText: {
        fontSize: 24,
        marginLeft: 20,
    },
    mainButtonStyle: {
        height: 50,
        width: 300,
        borderRadius: 50,
        background: "#2AAAE2",
        cursor: "pointer",
    },
    flatButtonStyle: {
        height: 50,
        width: 50,
        color: "#2AAAE2",
        fontSize: 200,

    }
}

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                style={styles.flatButtonStyle}
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                style={styles.flatButtonStyle}
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div>
                <button style={styles.mainButtonStyle}
                    onClick={this.handleOpen}>Dialog
                </button>
                <Dialog style={styles.headlineText} title="Get started today"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose} >
                </Dialog>
            </div>
        );
    }
}
export default Modal;