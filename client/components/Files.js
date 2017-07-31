import React, { Component } from 'react';
import File from './File.js';
import Button from './Button.js';

export default class Files extends Component {
  render() {
    if (this.props.filesData !== undefined) {
      this.props.filesData.map((singleFile) => {
        console.log('Single File:', singleFile)
      })
    }

    return (
      <ul>
        <li>
          <File fileData={this.singleFile}/>
        </li>
      </ul>
    )
  }
}
