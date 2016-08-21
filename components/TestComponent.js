import React from 'react'
var styles = require("./common.css");

export default class TestComponent extends React.Component {
	render(){
		return(
				<div className={styles.firstLevelComponent+" "+styles.borderForFirstElement}>React component</div>
			);
	}
}