
const contestants_arr = []
const contestantReducer = (state = contestants_arr, action) => {
    switch (action.type){
        case 'ADD_CONTESTANT':
            return [
                ...state,
                action.contestant
            ]

        case 'ADD_VOTE':
            return state.map((contestant) => {
                if (contestant.id === action.id){
                    return {
                        ...contestant.votes,
                        stageOne: action.no
                    }
                    // console.log('here', {...contestant.votes, stageOne: action.no})
                }
                return state
            })
        case 'EDIT_CONTESTANT':
            return state.map((contestant) => {
                if (contestant.id === action.id){
                    return {
                        ...contestant,
                        ...action.updated
                    }
                }
            })

        default:
            return state
    }
}

export default contestantReducer;