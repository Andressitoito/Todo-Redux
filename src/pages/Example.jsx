import React, { useEffect } from "react";

const withConsoleLog = (Component) => {
 const WrappedComponent = () => {

  React.useEffect(() => {
   console.log('Hi')
  }, [])

  return <Component />
 }
 return WrappedComponent
}



export const Example = () => {

 return 'Example'
}

export const ExampleWithConsoleLog = withConsoleLog(Example)