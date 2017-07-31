import React from 'react';
import ReactDOM from 'react-dom';
import Files from './components/Files.jsx';

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
      return data.results
      // formatFiles(data.results)
    })
    .catch(err => new Error(console.log('Hit a snag reaching API endpoint! Error code: ' + err)))
  }

  componentDidMount() {
    this.getFiles(this.makeUrl())
  }

	render() {
		return(
			<div className="App">
        <Files/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))
