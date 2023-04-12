import React, { useEffect, useState } from 'react'

function Api() {
    const [todo, setTodo ] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json();
        })
        .then((midul)=>{
            setTodo(midul);
            console.log(todo)
        })
    })
  return (
    <div>Api</div>
  )
}

export default Api