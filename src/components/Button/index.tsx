import * as C from './styles'

type ButtonProps = {
    text: string;
    backgroundColor: string;
    color: string;
    action?: () => void;
}

export const Button = ({text, backgroundColor, color, action}: ButtonProps) => {
    return(
        <C.Button $backgroundColor={backgroundColor} $color={color} onClick={action}>
            {text}
        </C.Button>
    );
}
