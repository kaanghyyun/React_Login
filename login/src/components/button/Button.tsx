import { useState } from "react";
import { StyledButton } from "./StyledButton";

interface Props {
    label: string;
    onClick: () => void;

}

export function Button({ label, onClick }: Props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }
    return (
        <div>
            <StyledButton onClick={onClick}>
                {label}
            </StyledButton>
        </div>
    )
}
