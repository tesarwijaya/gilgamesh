import {connect} from 'react-redux'

import Container from './container'

import {
  movieSearch,
  movieSearchForm,
} from './ducks/actions'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    Search() {
      dispatch(movieSearch())
    },
    formHandler() {
      return e => {
        dispatch(movieSearchForm(e.target.name, e.target.value))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)