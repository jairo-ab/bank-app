import React from 'react';
import { StyleSheet } from 'react-native'

import { Container, Card, Circle, Content, Label, Header } from './styles';

import { SimpleLineIcons, Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Activations() {
    return (
        <Container style={style.boxWithShadow}>
            <Card>
                <Header>
                    <Circle>
                        <Content>
                            <SimpleLineIcons name="screen-smartphone" size={24} color="#0E86D4" />
                        </Content>
                    </Circle>
                    <Label>Recarregar celular</Label>
                </Header>
                <Header>
                    <Circle>
                        <Content>
                            <Ionicons name="md-barcode-outline" size={24} color="#0E86D4" />
                        </Content>
                    </Circle>
                    <Label>Boletos e {"\n"}tributos</Label>
                </Header>
                <Header>
                    <Circle>
                        <Content>
                            <MaterialCommunityIcons name="contactless-payment-circle-outline" size={24} color="#741AAC" />
                        </Content>
                    </Circle>
                    <Label>Cobrar {"\n"}com Point</Label>
                </Header>
                <Header>
                    <Circle>
                        <Content>
                            <MaterialCommunityIcons name="link-box-variant-outline" size={24} color="#98042D" />
                        </Content>
                    </Circle>
                    <Label>Cobrar {"\n"}com link</Label>
                </Header>
            </Card>
            <Card>
                <Header>
                    <Circle>
                        <Content>
                            <MaterialIcons name="qr-code-scanner" size={24} color="#FEDE00" />
                        </Content>
                    </Circle>
                    <Label>Cobrar com{"\n"} QR ou Pix</Label>
                </Header>
                <Header>
                    <Circle>
                        <Content>
                            <FontAwesome name="money" size={24} color="#2BB8B3" />
                        </Content>
                    </Circle>
                    <Label>Enviar {"\n"}dinheiro</Label>
                </Header>
                <Header>
                    <Circle>
                        <Content>
                            <SimpleLineIcons name="present" size={24} color="#D6AD60" />
                        </Content>
                    </Circle>
                    <Label>Indicar {"\n"}o app</Label>
                </Header>
                <Header>
                    <Circle>
                        <Content>
                            <SimpleLineIcons name="plane" size={24} color="#FCC0C5" />
                        </Content>
                    </Circle>
                    <Label>Desconto {"\n"}em viagens</Label>
                </Header>
            </Card>
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