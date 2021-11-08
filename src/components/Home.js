import Hero from './home/hero'
import Winner from './home/winner'
import Countdown from './utilities/countdown'
import Roadmap from './home/roadmap'
import Faq from './utilities/faq'
import Construction from './utilities/construction'

const Home = () => {
    return (
        <div> 
            <Hero />
            <Winner />
            <Countdown />
            <Roadmap />
            <Faq />
            <Construction />
        </div>
    )
}

export default Home;