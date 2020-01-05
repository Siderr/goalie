import React, { useState } from 'react'
import Goal from './Goal'
import Modal from './Modal'
import GoalForm from './GoalForm'
import { useHttp } from '../hooks/http'

const GoalMap = props => {

    const [isLoading, fetchedData] = useHttp('http://localhost:3333/goals/theone', [])
    const goalData = fetchedData ? [fetchedData] : []
    const [isModalActive, toggleModal] = useState(true)
    const [goal, setGoal] = useState({})
    const [formFlag, setFormFlag] = useState('new')
    const handleToggle = (goal) => {
        setGoal(goal)
        setFormFlag('subGoal')
        toggleModal(!isModalActive)
    }

    const handleEdit = (goal) => {
        setGoal(goal)
        setFormFlag('edit')
        toggleModal(!isModalActive)
    }

    // const handleDelete = (goal) => {

    // }

    //TODO: Getting content
    let content = <div>Trying to load data....</div>

    if (!isLoading && goalData && goalData.length > 0) {

        content = (
            <div className="section">
                <Goal children={goalData} handleToggle={handleToggle} handleEdit={handleEdit} />
                <Modal toggle={isModalActive}>
                    <GoalForm {...goal} flag={formFlag}/>
                </Modal>
            </div>
        )

    }
    else if (!isLoading && goalData && goalData.length === 0) {
        content = <p>Something wrong happened.</p>
    }

    return content
}

export default GoalMap
