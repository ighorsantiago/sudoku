import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;

    justify-content: space-between;
    align-items: center;

    padding: 50px 0;

    background-color: black;
`;

export const Header = styled.View`
    
    width: 100%;
    height: 50px;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    color: white;
`;

export const BackButton = styled(RectButton)`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: white;
`;

export const Settings = styled(RectButton)`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    width: 100%;

    margin-top: 30px;

    align-items: center;
`;

export const Menu = styled.View`
    width: 100%;

    flex-direction: row;

    padding: 12px;
    margin: 15px;

    justify-content: space-between;
    align-items: center;
`;

export const ModalView = styled.View`
    width: 90%;
    height: 60%;

    justify-content: center;
    align-items: center;
    align-self: center;

    position: absolute;
    bottom: 150px;

    padding: 0 15px;
    border-color: darkblue;
    border-width: 1px;
    border-radius: 10px;

    background-color: black;
    opacity: 1;
`;

export const ModalText = styled.Text`
    font-size: 12px;

    align-self: center;

    color: white;
`;

export const ModalButton = styled(RectButton)`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Footer = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Button = styled(RectButton)`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: white;
`;

export const Text = styled.Text`
    font-size: 40px;
    color: darkslateblue;
`;
