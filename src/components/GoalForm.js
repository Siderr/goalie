import React, { useEffect } from 'react'
import useForm from 'react-hook-form';

const GoalForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    useEffect(()=> {
        


    },[])


    return (
        <div className="container">
            <div className="notification">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Goal" name="Name" ref={register({ required: true, max: 255, min: 10 })} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea className="textarea" name="Description" placeholder="Insert some description text for your goal." ref={register({ min: 0, maxLength: 3000 })} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Origin</label>
                        <div className="control">
                            <div className="select">
                                <select name="Origin" ref={register({ required: false })}>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GoalForm
