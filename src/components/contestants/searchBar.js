import React from 'react'
import { connect } from 'react-redux';
import {searchContestants, sortContestants} from '../../controls/redux_actions/sort'

class Search extends React.Component {

    constructor(props) {
        super()
        this.state = {
            word: '',
            sortBy: ''
        }
    }

    setSearch = (e) => {
        const word = e.target.value;
        this.setState({ word })
        this.props.dispatch(searchContestants({ word }))
    }

    setSortBy = (e) => {
        const sortBy = e.target.value;
        this.setState({ sortBy })
        this.props.dispatch(sortContestants({ sortBy }))
    }

    render() {
        return (
            <form>
                <input type = 'text' value = {this.state.search} onChange = {this.setSearch} />
                <select onChange = {this.setSortBy}>
                    <option value = 'name'> Name (A-Z) </option>
                    <option value = 'vote'> Highest Votes </option>
                </select>
            </form>
        )
    }
}

export default connect()(Search)