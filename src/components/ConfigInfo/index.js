import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Container, Content, Img, InfoLabels, LabelName, LabelView, IconCircle } from './styled'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import img from '../../images/perfil.jpg'

export default function ConfigInfo() {
    return (
        <Header>
            <Container>
                <Content>
                    <TouchableOpacity>
                        <Img source={img} />
                    </TouchableOpacity>
                    <InfoLabels>
                        <LabelName>Jairo Abreu</LabelName>
                        <LabelView>último acesso às 12:55</LabelView>
                    </InfoLabels>
                </Content>
                <IconCircle>
                    <MaterialCommunityIcons name="camera-wireless-outline" size={28} color="#fff" />
                </IconCircle>
            </Container>
        </Header>
    )
}