import {connect} from 'react-redux'

import Container from './container'

import {
  movieSearch,
  movieSearchForm,
} from './ducks/actions'

function mapStateToProps(state) {
  return {
    isLoading: state.Movie.isLoading,
    data: state.Movie.data,
    form: state.Movie.form,
    error: state.Movie.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    search() {
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