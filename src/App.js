import React from 'react';
import Contact from './components/Contact'


const emily = {
  name: "Emily Bell",
  img: "https://randomuser.me/api/portraits/women/81.jpg",
  status: 'Online'
}

function App() {
  return (
    <>
      <Contact  {... emily}/>
    </>
  );
}

export default App;
