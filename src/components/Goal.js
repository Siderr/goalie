import React from 'react'

function Goal({ children }) {
    console.table(children)
    return (
        <div className="columns">
            {children.map(goal => (
                <div className="column">
                    <p className="button is-success">{goal.name}</p>
                    {goal.subGoals && <Goal children={goal.subGoals} />}
                </div>
            )
            )}
        </div>
    )
}

export default Goal
