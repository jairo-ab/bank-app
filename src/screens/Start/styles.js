import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
    background: #fff;
    flex: 1;
`;

export const Container = styled(LinearGradient)``;

export const BalaceContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 14px 0;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin-left: 13px;
    margin-right: 3px;
    justify-content: flex-start;
`;

export const Image = styled.Image`
    width: 20px;
    height: 20px;
`;

export const WrapperContent = styled.ScrollView``;
