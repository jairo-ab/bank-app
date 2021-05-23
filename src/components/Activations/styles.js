import styled from 'styled-components/native'

export const Container = styled.View`
    background: #FFF;
    border-radius: 8px;
    margin: 20px 10px;
    padding: 15px;
`;

export const Card = styled.View`
    flex-direction: row;
    margin: 10px 0;
    justify-content: space-between;
`;

export const Header = styled.TouchableOpacity`
    width: 80px;
    align-items: center;
    justify-content: center;
`

export const Circle = styled.View`
    border: 1px solid #4445;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const Content = styled.View`
    margin: auto;
`; 

export const Label = styled.Text`
    color: #1E2640;
    font-weight: bold;
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
`;