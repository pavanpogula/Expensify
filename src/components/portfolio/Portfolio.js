import React from 'react'
import {Link} from 'react-router-dom'

const options=[{id:10,value:'qwerty'},{id:11,value:'weirdo'}]
function Portfolio() {
    
    return (
       
        <div>
       
        <h2>
        My Work
    </h2>
<p>
checkout the following things i have done
</p>
    <ul>
        {
            options.map(obj=>(
                <Link key={obj.id} to={"/portfolio/"+obj.id}>
                <li key={obj.id}>{obj.value}</li>
                </Link>
                
            ))
        }
    <li>
        
        </li>
    </ul>

                 </div>
    )
}

export default Portfolio

// props.match.params.id