import React from 'react'

const Title = () => {
    console.log("Title");
  return (
    <h1>Title</h1>
  )
}

export default React.memo(Title)