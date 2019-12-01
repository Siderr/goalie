import React from 'react'
import Goal from './Goal'
import { useHttp } from '../hooks/http'

const GoalMap = PROPS => {

    const [isLoading, fetchedData] = useHttp('http://localhost:3333/goals/theone', [])
    const goalData = fetchedData ? [fetchedData] : []
    console.log(goalData, fetchedData)

    let goal = [{
        name: 'parent',
        children: [
            { name: 'sub' },
            { name: 'sub' },
            { name: 'sub' },
        ]
    }]
    //TODO: Getting content
    let content = <div>Trying to load data....</div>

    if(!isLoading && goalData && goalData.length > 0){
        console.log('Here:', fetchedData);
        
        content = (
        <div className="section">
        <Goal children={goalData}/>
        </div>
        )
        
    }
    else if(!isLoading && goalData && goalData.length === 0) {
        content = <p>Something wrong happened.</p>
    }
    
    return content
}

export default GoalMap
