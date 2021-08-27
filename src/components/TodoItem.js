import React from 'react';
import './TodoItem.css';

const TodoItem = (props)=>{
    const onChangeHandler = ()=>{
        console.log('inside onChangeHandler');
        props.onCheck(props.id);
    }
    let color='black';
    let line = '';
    if(props.completed)
    {
        color = 'rgb(161, 158, 158)';
        line='line-through';
    }
    return(
        <section>
            <input className="check" type="checkbox" id={props.id} onChange={onChangeHandler} />
            <label htmlFor={props.id} style={{color:color, textDecoration:line}}>{props.title}</label>
        </section>
    )
}

export default TodoItem;