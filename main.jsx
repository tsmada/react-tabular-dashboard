import App from './App';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Dialog from 'material-ui/Dialog';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

// // export class Submain extends Component {
// //     render() {
// //         return (
// //             <div>{this.state.txt} {this.props.value} {this.state}</div>
// //         );
// //     }
// // }

// export default class DetailViewDialogConfirm extends React.Component {
//   constructor() {
//     super();
//     this.state = {open: false};
//     this.handleClose = this.handleClose.bind(this)
//     this.handleOpen = this.handleOpen.bind(this)
//   }

//   handleOpen(){
//     this.setState({open: true});
//     console.log('handling open');
//   };

//   handleClose() {
//     this.setState({open: false});
//   };

//   render() {
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onTouchTap={this.handleClose}
//       />,
//       <FlatButton
//         label="Submit"
//         primary={true}
//         keyboardFocused={true}
//         onTouchTap={this.handleClose}
//       />,
//     ];

//     return (
//     <MuiThemeProvider muiTheme={getMuiTheme()}>
//       <div>
//         <button onTouchTap={this.handleOpen}>Click me</button>
//         <Dialog
//           title="Dialog With Actions"
//           actions={actions}
//           modal={false}
//           open={this.state.open}
//           onRequestClose={this.handleClose}
//         >
//           The actions in this window were passed in as an array of React objects.
//         </Dialog>
//       </div>
//     </MuiThemeProvider>
//     );
//   }
// }


// export class Main extends Component {
//     constructor(){
//         super();
//         this.create = this.create.bind(this);
//     }
//     create() {
//         this.setState({open: true});
//         console.log('firing create');
//     }
//     render() {
//         return (
//         <div>
//         <input type="text"
//         onChange={this.props.update}
//         />
//         {this.props.txt}
//         </div>
//         );
//     }
// }

// export class App extends Component {
//     constructor() {
//         super();
//         this.state = {txt: 'this is the new state txt'}
//         this.update = this.update.bind(this)
//     }

//     update(e) {
//         this.setState({txt: e.target.value})
//     }
//     render(){
//        return (
//         <div>
//         <Main txt={this.state.txt} update={this.update}/>
//         <DetailViewDialogConfirm/>
//         </div>
//         );
//     }
// }

// App.propTypes = {
//     txt: React.PropTypes.string.isRequired
// }

// App.defaultProps = {
//     txt: 'this is the default value for this property'
// }

// //ReactDOM.render(<Main txt="this is the new text1 " value="100"/>, app);
// ReactDOM.render(<App txt="this is the new text" value="100"/>,app);