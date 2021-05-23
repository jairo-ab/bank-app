import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import Activities from '../../components/Activites';
import Banner from '../../components/Banner';
import Suggestions from '../../components/Suggestions';
import Tips from '../../components/Tips';
import { Balance, BalanceContainer, BalanceTitle, Button, Container, Header, Wrapper } from './styles';



export default function Home() {

    const [startCamera,setStartCamera] = React.useState(false)

    const __startCamera = ()=>{

    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <Button></Button>
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 123,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </ Header>
                <Suggestions />
                <Activities />
                <Tips />
                <Banner />
            </Container>
        </Wrapper>
    );
}

