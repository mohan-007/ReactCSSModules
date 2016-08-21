import React from 'react';
import TestComponent from './components/TestComponent'
var styles = require("./components/common.css");

class App extends React.Component {
   render() {
      return (
         <div>
			<TestComponent className="firstLevelComponent"></TestComponent>
	    </div>
      );
   }
}

export default App;