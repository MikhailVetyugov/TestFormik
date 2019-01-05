import React from 'react';
import { connect } from 'react-redux';

//import FormikForm2 from './FormikForm2';
import { FriendList } from './FriendList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h3>Hello!</h3>
        <FriendList />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //const loading = state.game.loading;
  return {
  };
}

export default connect(mapStateToProps, null)(App);