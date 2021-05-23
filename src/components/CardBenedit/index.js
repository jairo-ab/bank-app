import React from 'react';
import { StyleSheet } from 'react-native';
import { Foundation, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Container, ContenTitle, Balance, Circle, Number, InfoLabels, ContenTips, Title, TitleBalance, TitleInfo } from './styles'

export default function CardBenefit() {
    return (
        <Container style={style.boxWithShadow}>
            <ContenTitle>
                <Balance>
                    <Circle>
                        <Number>1</Number>
                    </Circle>
                    <InfoLabels>
                        <Title>Benefícios</Title>
                        <TitleBalance>Nível 1 - PagAgora</TitleBalance>
                    </InfoLabels>
                </Balance>
            </ContenTitle>
            <ContenTips>
                <Balance>
                    <Foundation name="ticket" size={30} color="#0DB060" />
                    <InfoLabels>
                        <TitleInfo>Descontos pagando com o código QR nos seus locais favoritos</TitleInfo>
                    </InfoLabels>
                </Balance>
            </ContenTips>
            <ContenTips>
                <Balance>
                <MaterialIcons name="local-shipping" size={30} color="#0DB060" />
                    <InfoLabels>
                        <TitleInfo>Frete grátis em produtos a partir de R$ 79</TitleInfo>
                    </InfoLabels>
                </Balance>
            </ContenTips>
            <ContenTips>
                <Balance>
                    <MaterialCommunityIcons name="music-box-multiple-outline" size={30} color="#0DB060" />
                    <InfoLabels>
                        <TitleInfo>Benefícios em assinaturas</TitleInfo>
                    </InfoLabels>
                </Balance>
            </ContenTips>
            <ContenTips>
                <Balance>
                    <Feather name="corner-down-left" size={30} color="#0DB060" />
                    <InfoLabels>
                        <TitleInfo>Devolução grátis</TitleInfo>
                    </InfoLabels>
                </Balance>
            </ContenTips>
        </Container>
    )
}

const style = StyleSheet.create({
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    }
});