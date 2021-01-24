import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import UserHome from './components/user-home'
// import {me} from './store'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount() {}

  render() {
    return <Route path="/" component={UserHome} />
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {}
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
