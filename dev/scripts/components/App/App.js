import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Локетв Роман Александрович" onLeftIconButtonTouchTap={this.handleToggle}/>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        >
                        <Link to='/'><MenuItem onTouchTap={this.handleClose}>Главная</MenuItem></Link>
                        <Link to='/blog'><MenuItem onTouchTap={this.handleClose}>Блог</MenuItem></Link>
                        <Link to='/portfolio'><MenuItem onTouchTap={this.handleClose}>Портфолио</MenuItem></Link>
                        <Link to='/experiments'><MenuItem onTouchTap={this.handleClose}>Эксперименты</MenuItem></Link>
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}
