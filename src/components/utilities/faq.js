import React from 'react';
import Accordion from './accordion';
import '../styles/helpers/_faq.scss'
import picture from './images/faq.jpeg'

const App = () => {

  const accordionData = [
    {
      title: 'What is this Contest About?',
      content: `The contest is designed on centered around love, the love a mother shares with her Child
      is second to none. We created this platform to help Parents prove to the world how much they love their child and how
      far they're willing to go for them. This contest also help showcase the great qualities of a child`
    },
    {
      title: 'What are the requirement(s) to register my Child?',
      content: `Your Child must be in the range of 0 - 10 years old. Please see our Terms & Condition for more information.`
    },
    {
      title: 'What is the revenue generated through voting used for?',
      content: `We will use part of it to help the less priviledged, the homeless, especially children. The other part will be use to organize
      Programs and Competitions for Children.`
    },
    {
      title: 'How do I register?',
      content: `Kindly navigate to "Register" fill out the information correctly, a follow up call will be made to you by 
      your Child's Account Manager, briefing you about the competition.`
    }
  ];


  return (
    <div className = 'faq'>
      <div className = 'faq__container'>
        <div className = 'faq__container__img'> 
          <img src = {picture} width = '700' alt = '' /> 
        </div>
        <div className = 'faq__container__text'>
          <h1> FAQs </h1>
          <div className="accordion">
            {accordionData.map(({ title, content}) => (
              <Accordion title = {title} content = {content}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;