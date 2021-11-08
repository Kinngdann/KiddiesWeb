import nextId from 'react-id-generator';

const ID = () => {
    const id = nextId(' ')
    const pad = '0000'
    return (pad.substring(0, pad.length - id.length ) + id).split(' ').join('')
}

export default ID;
