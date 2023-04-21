import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
    backgroundColor: string;
    borderColor: string;
    selected: boolean;
}

interface TextProps {
    color: string;
}

export const Container = styled(RectButton) <Props>`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;
    text-align: center;

    border-style: solid;
    border-width: 0.5px;
    border-color: ${({ borderColor }) => borderColor};

    ${({ selected }) => selected && { borderColor: 'white' }}

    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Text = styled.Text<TextProps>`
    font-size: 30px;
    color: ${({ color }) => color};
`;
