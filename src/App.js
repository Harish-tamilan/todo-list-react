import React, {useState, useEffect} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

const api = "https://jsonplaceholder.typicode.com/todos";

function App() {

  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onCheckHandler = (id)=>{
    console.log('inside onCheckHandler in App.js ');
    const index = state.findIndex((ite)=>id==ite.id);
    const temp = [...state];
    temp[index].completed = !temp[index].completed;
    setIsLoading(true);
    setState(temp);
    setIsLoading(false);
  }

  useEffect(
    async ()=>{
      const response = await fetch(api);
      setIsLoading(true);
      if(response.ok)
      {
        console.log('response is ok, the response data is ');
        const data = await response.json();
        const temp = [];
        for(var i=0;i<10;i++)
        {
          const obj = {...data[i]};
          // obj.active = true;
          // console.log(obj);
          obj.completed = false;
          temp.push(obj);
        }
        setState(temp);
        setIsLoading(false);
      }
    },[]);

    console.log('state is, ', state);
  return (
    <React.Fragment>
      <div className='card'>
        <div className='container'>
          <div className='list-items'>
            {!isLoading  &&
              state.map((item)=>{
                return(
                  <TodoItem id={item.id} title={item.title} onCheck={onCheckHandler} completed={item.completed} />
                );
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
