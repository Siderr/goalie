import React from 'react'

function Goal({ children }) {
    console.table(children)
    return (
        <div>
            {children.map(goal => (
                <>
                    <p>{goal.name}</p>
                    {goal.children && <Goal children={goal.children} />}
                </>
            )
            )}
        </div>
    )
}

export default Goal
