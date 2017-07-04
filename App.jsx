import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "10">This is the content!!!</p>
         </div>
      );
   }
}

export default App;