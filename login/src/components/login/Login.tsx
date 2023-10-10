import React, { useState } from "react";
import InputID from "./InputID";
import InputPW from "./InputPW";
import { Button } from "../button/Button";
import { StyledLogin } from "./StyledLogin";
import Logo from "../../image/Logo.png";
import { Image } from "./Image";
import { StyledFrame } from "./StyledLogin";
import image2 from "../../image/image2.jpg"
import LoginFrame from "./LoginFrame";


export function Login() {
    const Click = () => {
        alert('로그인돼찌롱');
    }
    
    const [text, setText] = useState('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
    }

    return (
        <div>
            <StyledFrame>

            <StyledLogin>
            <Image src={image2} alt = "이미지 어디감??"></Image>
                <InputID/>
                <InputPW/>
                <Button label='Enter' onClick={Click}></Button>
            </StyledLogin>
            </StyledFrame>
        </div>
    )
}