
const sortContestants = (contestants, {word, sortBy}) => {
    
    return contestants.filter((contestant) => {
        return contestant.name.toLowerCase().includes(word.toLowerCase())
    }).sort((a, b) => {
        if (sortBy === 'name'){
            return a.name > b.name? 1 : -1
        } else if (sortBy === 'vote'){
            return b.votes.stageOne > a.votes.stageOne? 1 : -1
        }
        return 1;
    })
}

export default sortContestants;
