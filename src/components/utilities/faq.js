import React from 'react';
import Accordion from './accordion';
import '../styles/helpers/_faq.scss'
import picture from './images/faq.jpeg'

const App = (props) => {

  return (
    <div className = 'faq'>
      <div className = 'faq__container'>
        <div className = 'faq__container__img'> 
          <img src = {picture} width = '700' alt = '' /> 
        </div>
        <div className = 'faq__container__text'>
          <h1> FAQs </h1>
          <div className="accordion">
            {props.accordionData.map(({ title, content}) => (
              <Accordion title = {title} content = {content}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;