import React from 'react'
import ReactPlayer from 'react-player/vimeo'
import '../styles/helpers/_video.scss';


const Video = () => {
    return (
        <div className = 'video'>
            <div className = 'video__title'>
                <h1> How Cute is Your Child? </h1>
            </div>
            <div className = 'video__item'>
                <ReactPlayer url='https://vimeo.com/643896506' />
            </div>
        </div>
    )
}

export default Video
