import 'bootstrap/dist/css/bootstrap.min.css'
import '~/styles.scss'
import App from '~/components/app'
import React from 'react'
import ReactDOM from 'react-dom'

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
