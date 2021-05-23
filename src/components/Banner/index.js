import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Details, Img, Title, Desctiption } from './styles'
import img13 from '../../images/credit-card.png'

export default function Banner() {
    return (
        <Container style={style.boxWithShadow}>
            <Img source={img13}/>
            <Details>
                <Title>Solicite seu cartão!</Title>
                <Desctiption>
                    Peça grátis o seu cartão de débito PagAgora para fazer compras em lojas ou sacar dinheiro.
                </Desctiption>
            </Details>
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
