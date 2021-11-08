
const searchContestants = ({search = ''}) => ({
    type: 'SEARCH',
    search,
})

const sortContestants = ({sortBy = ''}) => ({
    type: 'SORT',
    sortBy
})

export {searchContestants, sortContestants};