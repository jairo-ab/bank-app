import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Wrapper, Title, Container,  BalanceTitle, Header, Card, Data } from './styles';

export default function Notification() {
    
    return (
            <Wrapper>
                <Container>
                    <Header>
                        <Title>Notificações</Title>
                        <Ionicons name="notifications" size={24} color="#10c86e" />
                    </Header>
                </Container>
                    <Card>
                        <AntDesign name="message1" size={30} color="#10c86e" />
                        <BalanceTitle>Você Recebeu um Pix no valor de R$5,00.</BalanceTitle>
                        <Data>21/mai{"\n"}sex</Data>
                    </Card>
                    <Card>
                        <AntDesign name="message1" size={30} color="#10c86e" />
                        <BalanceTitle>Você Recebeu um Pix no valor de R$10,00.</BalanceTitle>
                        <Data>20/mai{"\n"}qui</Data>
                    </Card>
                    <Card>
                        <AntDesign name="message1" size={30} color="#10c86e" />
                        <BalanceTitle>Você Recebeu um Pix no valor de R$15,00.</BalanceTitle>
                        <Data>20/mai{"\n"}qui</Data>
                    </Card>
                    <Card>
                        <AntDesign name="message1" size={30} color="#10c86e" />
                        <BalanceTitle>Você Recebeu um Pix no valor de R$25,00.</BalanceTitle>
                        <Data>19/mai{"\n"}quar</Data>
                    </Card>
                    <Card>
                        <AntDesign name="message1" size={30} color="#10c86e" />
                        <BalanceTitle>Você Recebeu um Pix no valor de R$5,00.</BalanceTitle>
                        <Data>18/mai{"\n"}ter</Data>
                    </Card>
            </Wrapper>
        );
    }
