import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from './component'
import * as actions from './actions'

const mapStateToProps = (state) => {
  return {
    blog: state.blog,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
