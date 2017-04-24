import { connect } from 'react-redux';
import App from '../components-semantic/app';
import * as appAction from '../actions/appAction';


const mapStateToProps = (state, ownProps) => {
  return {
      app:state.app
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveMenu: selectedMenu => {
        console.log("selectedMenu:", selectedMenu);
        dispatch(appAction.ActiveMenu(selectedMenu))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
