import React from 'react'
import { useHttp } from '../hooks/http'

const GoalPicker = props => {

    const [isLoading, fetchedData] = useHttp('http://localhost:3333/goals', [])

    const selectedOptions = fetchedData ?
        fetchedData.map(item => ({
            id: item._id,
            name: item.name
        })
        ) : []

    let selectContent = <p>Loading Goals....</p>

    if (!isLoading && selectedOptions && selectedOptions.length > 0) {
        selectContent = (
            <div className="field">
                <label className="label">Origin</label>
                <div className="control">
                    <div className="select">
                        <select name="Origin" ref={props.register({ required: false })}>
                            {selectedOptions.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    } else if (!isLoading && selectedOptions && selectedOptions.length === 0) {
        selectContent = <p>Couldn't fetch goals.</p>
    }

    return selectContent
}

export default GoalPicker
