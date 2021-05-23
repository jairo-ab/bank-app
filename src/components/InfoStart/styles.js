import styled from 'styled-components/native'

export const Container = styled.View`
    background: #FFF;
    border-radius: 8px;
    margin: 10px 10px 20px 10px;
    padding: 15px;
`;

export const Card = styled.View`
    flex-direction: row;
    justify-content: space-between;
`; 

export const CardInformation = styled.View`
    flex-direction: row;
    align-items: center
`;

export const Balance = styled.Text`
    font-size: 20px;
    margin-right: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const ButtonClick = styled.TouchableOpacity``;

export const ItemsButton = styled.View`
    flex-direction: row;
    margin: 15px 0;
    justify-content: space-between;
`;

export const CardButton = styled.View`
    width: 70px;
    height: 40px;
    background-color: #D2E5D0;
    justify-content: center;
    border-radius: 10px;
`;

export const Label = styled.Text`
    color: #4449;
    text-align: center;
`;

export const CardContent = styled.View`
    width: auto;
    background: #11191f;
    border-radius: 10px
`;

export const Informations = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10px;
    align-items: center;
`;

export const LabelInfo = styled.Text`
    color: #868B8E;
    font-weight: bold;
`

export const LabelCard = styled.View`
    flex-direction: row;
    margin: 10px 10px;
`;

export const InfoNew = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

export const CarNew = styled.View`
    width: 40px;
    margin-left: 10px;
    background: #0DB060;
    border-radius: 10px;
`;

export const CarInfo = styled.View`
    flex-direction: row;
    margin: 10px 10px;
    align-items: center;
`;

export const Circle = styled.View`
    height: 30px
    width: 30px;
    background: #868B8E;
    border-radius: 15px;
`;

export const Align = styled.View`
    margin: auto;
`;

export const LabelCar = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
`;