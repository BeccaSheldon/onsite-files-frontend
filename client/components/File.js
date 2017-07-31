import React, { Component } from 'React';
import Button from './Button.js';

export default class File extends Component {
  constructor(props) {
		super(props);

		this.state = {
			subfiles: []
		}
	}

  componentDidMount() {
    getSubfiles = () => {
      fetch('http://localhost:8080/api/files')
      .then(result => result.json())
      .then((data) => {
        console.log(data)
        const subfilesFound = data.result.map(obj => obj.data)
        this.setState({ subfiles: subfilesFound })
      })
      .catch(err => new Error(console.log('Hit a snag reaching API endpoint! Error code: ' + err)))
    }
  }

  render() {
    return (
      <ul>
        <li><input type="text"/></li>
        <li>{this.props.name}</li>
        <li>{this.props.size}</li>
        <li>{this.props.modified}</li>
        <li>
        </li>
        <li>
        </li>
      </ul>
    )
  }
}
