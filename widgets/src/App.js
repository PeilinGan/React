import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/route';
import Header from './components/Header';

const items = [
  {
    title: 'what is React',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why is React',
    content: 'React is a favorite javascript library',
  },
  {
    title: 'How to use React',
    content: 'You can use it what whatever you want',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'Red',
  },
  {
    label: 'The color Green',
    value: 'Green',
  },
  {
    label: 'The color Blue',
    value: 'Blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
