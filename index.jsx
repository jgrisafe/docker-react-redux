require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox'

ReactDOM.render(<CommentBox url="http://localhost:3000/api/comments" />, document.querySelector("#myApp"));
