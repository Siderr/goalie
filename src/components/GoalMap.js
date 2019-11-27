import React from 'react'
import Goal from './Goal'
import { useHttp } from '../hooks/http'

const GoalMap = () => {

    const [isLoading, fetchedData] = useHttp('http://localhost:3333/theone')
    let goal = [{
        name: 'parent',
        children: [
            { name: 'sub' },
            { name: 'sub' },
            { name: 'sub' },
        ]
    }]
    return (
        <Goal children={goal}/>
    )
}

export default GoalMap
