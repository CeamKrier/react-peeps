import React from 'react'
import ReactDOM from 'react-dom'
import LibName from '../../lib/index'

const Showcase: React.FC = () => {

  return (
    <LibName text="The boilerplate working! Start editing the index.tsx file. Happy Codin'!" />
  )
}

ReactDOM.render(
  <Showcase />,
  document.getElementById('main')
)