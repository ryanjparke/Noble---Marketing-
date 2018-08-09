import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import './FooterModal.css';
import RaisedButton from 'material-ui/RaisedButton';
import { FloatingActionButton } from 'material-ui';

const styles = {
    headlineText: {
        height: 70,
        fontSize: 24,
        marginLeft: 0,
        color: "black",
    },
    footerButtonStyle: {
        height: 10,
        fontSize: 13,
        // color: "white",
        // width: "15vw",
        // borderRadius: 50,
        // background: "#46A040",
        cursor: "pointer",
        
    },
    flatButtonStyle: {
        height: 40,
        width: 50,
        color: "#2AAAE2",

    },
    emailInput: {
        height: 40,
        width: 700,
        fontSize: 20 
    }
}

class FooterModal extends Component {
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
                value="Send"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
            
        ];

        return (
            <div className='footerModalText'>
                <i class="fas fa-comment"></i>
                <a 
                style={styles.footerButtonStyle}
                    onClick={this.handleOpen}>Request a demo
                </a>
                <Dialog action='mailto:info@noblesg.com' method="post" enctype="text/plain" style={styles.headlineText} 
                    // title="Get started today"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose} >
                    <h2 style={styles.headlineText}>Let us know where to reach you</h2>
                    <p>Ready to make life easy?</p>
                    <input style={styles.emailInput}placeholder="Email Address" />
                    <input style={styles.emailInput}type='text' name="county" />
                </Dialog>
            </div>
        );
    }
}
export default FooterModal;