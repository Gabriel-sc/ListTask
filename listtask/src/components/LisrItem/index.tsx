import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';


type Props= {
    Item: Item
}

export const ListItem = ({Item}: Props) => {
    const [isChecked, setIsChecked] = useState(Item.done);

    return(
//função para marcar e desmarcar na checkbox, e criação da checkbox
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked = {isChecked}
                onChange = {e => setIsChecked(e.target.checked)}
            />
            <label>{Item.name} </label>
        </C.Container>
    );
}
