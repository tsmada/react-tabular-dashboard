import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react';
import DetailViewDialogConfirm from './DetailViewDialogConfirm.jsx';
import AppBarExampleIconMenu from './Appbar.jsx';
import DrawerSimpleExample from './SlideFilter.jsx';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

export default class App extends React.Component {

  constructor(props) {
    super();
    this.state = { open: false, listing: null, id: null};
    this.update = this.update.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.serverRequest = $.get("http://localhost:8000/api/listings", function (result) {
      this.setState({ data: result
      });
    }.bind(this));
    console.log('component mounted');
  }

    update(e){
        this.setState({open: true, listing: e.props.data.propertyaddress, id: e.props.data.fcl_id});
    }

    handleClose() {
        this.setState({open: false});
    }
    handleSubmit() {
        this.setState({open:false});
        //window.location = '/listing/' + String(this.state.id)
    }
    render() {
        return (
           <div>
           <div>
           <AppBarExampleIconMenu />
           <DrawerSimpleExample />
            <DetailViewDialogConfirm open={this.state.open} handleClose={this.handleClose} handleSubmit={this.handleSubmit} listing={this.state.listing}/>
             <Griddle noDataMessage="Loading data..." columnMetadata={metadata} results={this.state.data} useFixedHeader={true} resultsPerPage={25} onRowClick={this.update} showSettings={true}
             />
           </div>
           </div>
        );
    }
};

const About = (props) => <div><h1>Hello</h1></div>;
const NoMatch = (props) => <div><h1>woah patna 404 </h1></div>;
const ListingDetailView = (props) => <div><h1>Listing Detail View:</h1></div>;

var metadata = [
  {
    "columnName": "casestatus",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "Case Status"
  },
  {
    "columnName": "state",
    "order": 2,
    "locked": false,
    "visible": true,
    "displayName": "State"
  },
  {
    "columnName": "county",
    "order": 3,
    "locked": false,
    "visible": true,
    "displayName": "County"
  },
  {
    "columnName": "saledate",
    "order": 4,
    "locked": false,
    "visible": true,
    "displayName": "Auction Date"
  },
  {
    "columnName": "propertyzip",
    "order": 5,
    "locked": false,
    "visible": true,
    "displayName": "Property Zip"
  },
  {
    "columnName": "propertyuse",
    "order": 6,
    "locked": false,
    "visible": true,
    "displayName": "Property Use"
  },
  {
    "columnName": "propertyaddress",
    "order": 7,
    "locked": false,
    "visible": true,
    "displayName": "Property Address"
  },
  {
    "columnName": "finaljudgement",
    "order": 8,
    "locked": false,
    "visible": true,
    "displayName": "Final Judgement"
  },
  {
    "columnName": "assessedvalue",
    "order": 9,
    "locked": false,
    "visible": true,
    "displayName": "Assessed Value"
  },
  {
    "columnName": "maxbid",
    "order": 10,
    "locked": false,
    "visible": true,
    "displayName": "Max Bid"
  },
  {
    "columnName": "parcelid",
    "order": 11,
    "locked": false,
    "visible": true,
    "displayName": "Parcel ID"
  }
]


ReactDOM.render( <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/about" component={About}/>
                    <Route path="/listing/:id" component={ListingDetailView}/>
                </Route>
                <Route path="*" component={NoMatch}/>
            </Router>, app);
//ReactDOM.render(<DetailViewDialogConfirm/>, app);