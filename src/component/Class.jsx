import React from 'react'

// const Class = () => {
//   return (
//     <div>Class</div>
//   )
// }

// export default Class

export default class ClassComponent  extends React.Component{
    render() {
        return (
                <div>{this.props.type}</div>
              )
    }
}