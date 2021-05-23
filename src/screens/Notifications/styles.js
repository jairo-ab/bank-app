import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #fff;
    flex: 1;
`;

export const Container = styled.View`
    align-items: center;
    margin: 15px 0;
`;

export const Header = styled.View`
  margin: 15px 0;
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;


export const Title = styled.Text`
    font-size: 25px;
    color: #333;
    margin-right: 15px;

`;

export const Card = styled.View`
    margin: 8px 10px;
    height: 50px
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #84DCC6;
    padding: 15px;
    border-radius: 15px
`;

export const BalanceTitle = styled.Text`
    padding: 0 4px;
    color: #000;
    font-size: 15px;
`;

export const Data = styled.Text`
    color: #333
    text-align: center;
    font-size: 13px
`;

