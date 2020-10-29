import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // First argument: like vairable in state - Second arguemnt: function to update state
  // it will rerender the page on change- null is the initial value for the state.
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitileClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitileClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
