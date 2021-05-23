import { keyframes } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: #FFF;
    border-radius: 8px;
    margin: 10px 10px 65px 10px;
`;

export const ContenTitle = styled.View`
    background: #0DB060;
    padding: 15px;
`;

export const Balance = styled.View`
    flex-direction: row;
    align-items: center;
    height: auto;
`;

export const Circle = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    border: 4px solid #4445
    margin-right: 13px;
`;

export const Number = styled.Text`
    color: #FFF;
    margin: auto;
    font-size: 19px;
    font-weight: bold;
`;

export const InfoLabels = styled.View``;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const TitleBalance = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;

export const TitleInfo = styled.Text`
    color: #4448;
    font-size: 16px;
    margin: 0 10px;
`;

export const ContenTips = styled.View`
    background: #FFF;
    margin: 3px 10px;
    height: auto;
    padding: 15px;
`;