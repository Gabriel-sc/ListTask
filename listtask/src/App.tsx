import { useState } from "react";
import * as C from './App.styles';
import { Item } from './types/Item';
import {ListItem} from './components/LisrItem/';
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id:1, name:'Estudar sempre',done:false},
  ]);
//Adicionar novas tarefas
  const handleAddTask= (taskName: string) => {
    let newList= [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done:false
    });
    setList(newList);
  }
//apagar na barra após escrever  
  const handleTaskChange= (id: number,done: boolean) => {
    let newList= [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

// grid do projeto criado na app.styles
  return(
    <C.Container>  
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {/*Área de adicionar novas tarefas*/}
        <AddArea onEnter= {handleAddTask} />

        {list.map((Item, index) => (
          <ListItem key={index} Item={Item}/>
        ))}

      </C.Area>
      <footer>
        Baseado no projeto do <a href="https://youtu.be/95sAtAareR8" rel="noopener noreferrer"  target="_blank">Bonieky Lacerda</a>
      </footer>
    </C.Container>
  );
}

export default App;
