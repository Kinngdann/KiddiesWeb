
const input = {
    search: '',
    sortBy: 'name'
}

const sortReducer = (state = input, action) => {
    switch (action.type){
        case 'SEARCH':
            return {
                ...state,
                word: action.search,
            }
        case 'SORT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        default:
            return state
    }
}

export default sortReducer;