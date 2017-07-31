import React from 'react';
import ReactDOM from 'react-dom';
import Files from './components/Files.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
  }

  // Make the URL
  makeUrl = () => {
		const base = 'http://localhost:8080/api/files'
		return `${base}`
	}

  // Make the API call
  getFiles = () => {
    fetch('http://localhost:8080/api/files')
    .then(result => result.json())
    .then((data) => {
      console.log(data)
      const filesFound = data.result.map(obj => obj.data)
      this.setState({ filesFound })
    })
    .catch(err => new Error(console.log('Hit a snag reaching API endpoint! Error code: ' + err)))
  }

  componentDidMount() {
    this.getFiles(this.makeUrl())
  }

	render() {
    const listStyle = {
      display: "inline-block",
      padding: "2rem",
      listStyle: "none"
    }

		return(
			<div className="App">
        <ul style={listStyle}>
          <li style={listStyle}>File Name</li>
          <li style={listStyle}>Size</li>
          <li style={listStyle}>Date Modified</li>
        </ul>
        <Files filesData={this.getFiles(this.makeUrl())} />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))
