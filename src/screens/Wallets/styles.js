
import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    align-items: center
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    color: #444;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin: 0 30px;
`;

export const CardBody = styled.View`
    flex: 1;
    margin: 0 30px;
`;

export const Card = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin: 20px 0; 
`; 

export const CircleIcon = styled.View`
    border: 1px solid #0DB060;
    border-radius: 23px;
    width: 23px;
    height: 23px;
    align-items: center;
    justify-content: center;
`;

export const Information = styled.Text`
    color: #4448;
    font-size: 18px;
    margin-left: 15px;
`;

export const ButtonPay = styled.TouchableOpacity`
    background: #0DB060;
    width: 340px;
    height: 33px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
`;

export const LabelInfo = styled.Text`
    color: #fff;
    font-size: 17px
`;

export const ImageModal = styled.Image`
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #0DB060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 25px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const UseTicketLabel = styled.Text`
  color: #0DB060;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: underline;
`;

export const LabelModal = styled.Text`
  color: #333;
  justify-content: center;
  align-items: center;
  margin-left: 30px 
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerModal = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const SpaceModalOne = styled.View`
  flex-direction: row;
`;
export const SpaceModalTwo = styled.View`
  margin-right: 20px;
`;

export const ModelReturnOpacity = styled.TouchableOpacity``;

export const LabelModalContent = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
`;

export const BannerContainer = styled.View`
  margin: 10px 16px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  height: 100px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1
  margin-right: 10px;
`;

export const TitleBanner = styled.Text`
  color: #333;
  font-size: 13px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #4449;
  font-size: 14px;
  margin-top: 5px;
`;

export const VectorModel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #d3d3d3;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const WrapperModal = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerModalScroll = styled.ScrollView``;

export const TitleHelp = styled.Text`
  color: #0DB060;
  font-size: 15px;
  font-weight: bold;
  text-decoration: underline;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const LabelModalContentTwo = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 30px;
`;