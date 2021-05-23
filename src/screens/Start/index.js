import React from 'react'
import { Wrapper, Container, Title, BalaceContainer, Image, WrapperContent } from './styles.js'

import InfoStart from '../../components/InfoStart'
import Banner from '../../components/Banner'
import Activations from '../../components/Activations'
import CardBenefit from '../../components/CardBenedit'

import image from '../../images/medal.png'

export default function Start() {
    return (
        <Wrapper>
            <Container colors={['#0DB060', '#FFF']}>
                <BalaceContainer>
                    <Title>
                        Olá, Jairo Abreu - Nível 1
                    </Title>
                    <Image source={image} />
                </BalaceContainer>
                <WrapperContent>
                <InfoStart />
                <Banner />
                <Activations />
                <CardBenefit />
                </WrapperContent>
            </Container>
        </Wrapper>
    )
}
