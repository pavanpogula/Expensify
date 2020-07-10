import React from 'react'

function PortfolioItem(props) {
    console.log(props)
    return (
        <div>
             <>
                    hey {props.match.params.id}
                    </>
        </div>
    )
}

export default PortfolioItem
