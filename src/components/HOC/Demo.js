import React, { Component } from 'react'

 
 const Info = (props) =>{
     return (
         <div>
             <h1>INFO</h1>
     <p>this site conatins <b>{props.name}</b></p>
         </div>
     )
 }
 
const withAdminWarning = (WrappedComponent)=>{
 const WithAdminWarning = (props)=>{
     console.log(props)
    return (<>
                <h3>this is private info DUDE</h3>
                <WrappedComponent name="pavan"/>
            </>)
    }
    return WithAdminWarning
}


export default withAdminWarning(Info)
