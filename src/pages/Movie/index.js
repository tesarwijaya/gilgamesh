import {connect} from 'react-redux'

import Container from './container'

import {
  movieSearch,
  movieSearchForm,
} from './ducks/actions'

function mapStateToProps(state) {
  return {
    search: state.Movie.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchHandler() {
      return (e) => {
        e.preventDefault()

        dispatch(movieSearch())
      }
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