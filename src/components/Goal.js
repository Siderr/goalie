import React, { useState } from 'react'

function Goal({ children, handleToggle, handleDelete, handleEdit }) {
    const [show, setToggled] = useState(false)
    return (
        <div className="columns">
            {children.map(goal => (
                <div className="column" key={goal._id}>
                    <section className="accordions">
                        <article className={`accordion ${show ? "is-active" : ""}`}>
                            <div className="accordion-header toggle">
                            <h1 className="">{goal.name}</h1>
                                {/* <p>{goal.name}</p> */}
                                <button className="toggle" aria-label="toggle" onClick={() => setToggled(!show)}></button>
                            </div>
                            <div className="accordion-body">
                                <div className="accordion-content">
                                    {goal.description}
                                </div>
                                <div className="accordion-content">
                                    <nav className="level">
                                        <div className="level-item">
                                            <button className="button is-info" onClick={() => handleToggle(goal)}>Add subgoal</button>
                                        </div>
                                        <div className="level-item">
                                            <button className="button is-info" onClick={() => handleEdit(goal)}>Edit</button>
                                        </div>
                                        <div className="level-item">
                                            <button className="button is-danger" onClick={() => handleDelete(goal)}>Delete</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </article>
                    </section>
                    {goal.subGoals && <Goal children={goal.subGoals} handleToggle={handleToggle} handleEdit={handleEdit}/>}
                </div>
            )
            )}
        </div>
    )
}

export default Goal
