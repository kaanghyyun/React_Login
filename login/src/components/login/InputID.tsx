import { StyledInput } from "./StyledInput";
import {HtmlHTMLAttributes, SetStateAction, useState} from 'react';


const InputID = () => {
    const [text, setText] = useState('');

    

    return (
        <div>
            <StyledInput type="text" placeholder="Email">
                
            </StyledInput>
        </div>
    )
}

export default InputID;