import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Header, Container, Content, Card, LabelAccount, LabelTitle, LabelInfo } from './styled';

export default function ConfigDatails() {

    const [onView, setView] = useState(true);

    return (
        <Header style={style.boxWithShadow}>
            <Container>
                <Content onPress={() => setView(!onView)}>
                    <AntDesign name={ onView ? 'down' : 'right' } size={15} color="#fff" />
                    <LabelAccount>Conta</LabelAccount>
                </Content>
                <Card>
                    <LabelTitle>+55 (92) 91234-5678</LabelTitle>
                    <LabelInfo>Toque para alterar o número de telefone</LabelInfo>
                </Card>
                <Card>
                    <LabelTitle>@jairoabreu</LabelTitle>
                    <LabelInfo>Nome de Usuário</LabelInfo>
                </Card>
                <Card>
                    <LabelTitle>Nunca deixe para amanhã, o que você pode fazer{"\n"} depois de amanhã</LabelTitle>
                    <LabelInfo>Biografia</LabelInfo>
                </Card>
            </Container>
        </Header>
    )
}

const style = StyleSheet.create({
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 15
    }
});