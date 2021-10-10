
const addContestant = ({id, name, sex, age, location, description, pictures, tel, whatsapp, parentName, email, relationship, votes}) => ({
    type: 'ADD_CONTESTANT',
    contestant: {
        id,
        name, 
        sex, 
        age, 
        location, 
        description, 
        pictures, 
        tel, 
        whatsapp, 
        parentName, 
        email, 
        relationship,
        votes
    }
})

const addVote = ({id, no}) => ({
    type: 'ADD_VOTE',
    id,
    no
})

const editContestant = ({id, name, sex, age, location, description, pictures, tel, whatsapp, parentName, email, relationship}) => ({
    type: 'EDIT_CONTESTANT',
    id,
    updated: {
        name, 
        sex, 
        age, 
        location, 
        description, 
        pictures, 
        tel, 
        whatsapp, 
        parentName, 
        email, 
        relationship
    }
})

export {addContestant, addVote, editContestant};


// const userData = {
//     id: '',
//     name: '', 
//     sex: '',
//     age: '',
//     location: '',
//     description: '',
//     pictures: [  
//         //Array of image files
//     ],
//     tel: '',
//     whatsapp: '',
//     parentName: '',
//     email: '',
//     relationship: '',
//     votes: {
//         stageOne: 0,
//         stageTwo: 0,
//         stageThree: 0
//     }
// }
