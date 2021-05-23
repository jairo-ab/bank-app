import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import {
    Container,
    Card,
    CardInformation,
    Balance,
    Bold,
    ButtonClick,
    ItemsButton,
    CardButton,
    Label,
    CardContent,
    Informations,
    LabelCard,
    LabelInfo,
    InfoNew,
    CarInfo,
    Circle,
    LabelCar,
    CarNew,
    Align
} from './styles'

const items = [
    {
        key: String(Math.random()),
        label: 'Depositar'
    },
    {
        key: String(Math.random()),
        label: 'Transferir'
    },
    {
        key: String(Math.random()),
        label: 'Sacar'
    },
    {
        key: String(Math.random()),
        label: 'Crédito'
    }
]

export default function InfoStart() {

    const replacetTo = (str) => Array(str.length).fill('*').reduce((ac, v) => `${ac}${v}`, "")
    const [onView, setView] = useState(true);

    return (
        <Container style={style.boxWithShadow}>
            <Card>
                <CardInformation>
                    <Balance>
                        R$ <Bold>{
                            onView ? '123,00' : `${replacetTo('123,00')}`
                        }</Bold>
                    </Balance>
                    <ButtonClick onPress={() => setView(!onView)}>
                        <Feather name={ onView ? 'eye' : 'eye-off'} size={24} color="black" />
                    </ButtonClick>
                </CardInformation>
                <ButtonClick>
                    <AntDesign name="right" size={24} color="#0DB060" />
                </ButtonClick>
            </Card>
            <ItemsButton>
                {items.map((item) => (
                    <CardButton key={item.key}>
                        <ButtonClick>
                            <Label>{item.label}</Label>
                        </ButtonClick>
                    </CardButton>
                ))}
            </ItemsButton>
            <CardContent>
                <Informations>
                    <LabelCard>
                        <LabelInfo>Cartão PagAgora</LabelInfo>
                        <CarNew>
                            <InfoNew>NOVO</InfoNew>
                        </CarNew>
                    </LabelCard>
                    <AntDesign name="right" size={15} color="#FFF" />
                </Informations>
                <CarInfo>
                    <Circle>
                        <Align>
                            <Ionicons name="cart-outline" size={20} color="#FFF" />
                        </Align>
                    </Circle>
                    <LabelCar>Pagar on-line</LabelCar>
                </CarInfo>
            </CardContent>
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