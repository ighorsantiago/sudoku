import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 80%;

    align-items: center;
    justify-content: center;
    
    padding: 19px;
    /* margin-bottom: 12px; */
    border-radius: 30px;

    background-color: blue;
`;

export const Title = styled.Text`
    font-size: 24px;
`;
