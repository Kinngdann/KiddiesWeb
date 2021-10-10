
const searchContestants = ({word = ''}) => ({
    type: 'SEARCH',
    word,
})

const sortContestants = ({sortBy = ''}) => ({
    type: 'SORT',
    sortBy
})

export {searchContestants, sortContestants};