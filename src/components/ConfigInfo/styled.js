import styled from 'styled-components/native'

export const Header = styled.View`
    background: #FAF7F4;
    margin: 0 0;
    border: 1px solid #4445;
`;

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 10px;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Img = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

export const InfoLabels = styled.View`
    margin-left: 8px;
`;

export const LabelName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const LabelView = styled.Text`
    color: #4449;
`;

export const IconCircle = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #0DB060;
    align-items: center;
    justify-content: center;
`