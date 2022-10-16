import React from "react"
import { store } from '../app/store'



function connect(mapStateToProps) {

 return function (Component) {

  const hoc = class extends React.Component {
   componentDidMount() {
    store.subscribe(() => {
     console.log(store.getState());
     const state = store.getState()
     const stateProps = mapStateToProps(state)
     this.setState(stateProps)
    })
   }

   render() {
    return (
     <Component
      {...this.state}
     />
    )
   }
  }
  
  hoc.displayName = `Connect(${Component.displayName || Component.name})`

  return hoc
 }
}

export default connect