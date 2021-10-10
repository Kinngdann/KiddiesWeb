
const input = {
    word: '',
    sortBy: 'name'
}

const sortReducer = (state = input, action) => {
    switch (action.type){
        case 'SEARCH':
            return {
                ...state,
                word: action.word,
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