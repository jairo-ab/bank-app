import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Feather, MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import {
    Header,
    Container,
    LabelTop,
    Label,
    Items,
    ContainerModal,
    WrapperModal,
    SpaceModalOne,
    SpaceModalTwo,
    ModelReturnOpacity,
    LabelModal,
    Img,
    ContentModal,
    LabelModalInfo,
    LabelModalCredits,
    ContentMembers,
    LabelMember,
    HeaderModal,
    Copyright,
    Version
} from './styles'

const items = [
    {
        key: String(Math.random()),
        label: 'Afonso Galvão Coelho – 2133854'
    },
    {
        key: String(Math.random()),
        label: 'André Luiz Marques da Silva - 2133837 '
    },
    {
        key: String(Math.random()),
        label: 'Deysiane Ferreira Cunha - 2134452 '
    },
    {
        key: String(Math.random()),
        label: 'Diego Franco da Silva - 2135260'
    },
    {
        key: String(Math.random()),
        label: 'Elton Avelino- 2135430'
    },
    {
        key: String(Math.random()),
        label: 'Gabriel Henrique Simões do Nascimento - 2131889 '
    },
    {
        key: String(Math.random()),
        label: 'Icaro Mateus Praia Pacheco - 2132523'
    },
    {
        key: String(Math.random()),
        label: 'Jairo Matos de Abreu - 2135236 '
    },
    {
        key: String(Math.random()),
        label: 'Jeferson Guimarães Batalha - 2131083'
    },
    {
        key: String(Math.random()),
        label: 'Jefson Kairon de Oliveira - 0564441'
    },
    {
        key: String(Math.random()),
        label: 'Luiz Felipe Soriano da Silva - 2133382'
    },
    {
        key: String(Math.random()),
        label: 'Matheus Henrique de Lima Mendes - 2132273'
    },
    {
        key: String(Math.random()),
        label: 'Matheus Marinho Menezes - 2134249'
    },
    {
        key: String(Math.random()),
        label: 'Rhayane Karoline Ferreira Menezes - 0205293'
    },
    {
        key: String(Math.random()),
        label: 'Thiago Pinto Barroncas 0174139'
    },
]

import img from '../../images/Inovatec.png'

export default function ConfigSecurity() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Header>
            <Modal animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                }}>
                <WrapperModal>
                    <ContainerModal>
                        <SpaceModalOne>
                            <ModelReturnOpacity>
                                <AntDesign name="arrowleft" size={24} color="#0DB060" onPress={() => {
                                    setModalVisible(!modalVisible);
                                }} />
                            </ModelReturnOpacity>
                            <LabelModal>PagAgora</LabelModal>
                            <Feather name="menu" size={24} color="#0DB060" />
                        </SpaceModalOne>
                        <HeaderModal>
                        <SpaceModalTwo>
                            <Img source={img} />
                            <Version>Versão 1.0.0</Version>
                            <Copyright>Copyright © 2021 - 21021 PagAgora</Copyright>
                            <ContentModal>
                                <LabelModalInfo>Turma de Análise e Desenvolvimento de Sistemas</LabelModalInfo>
                                <LabelModalCredits>Créditos</LabelModalCredits>
                                {items.map((item) => (
                                    <ContentMembers key={item.key}>
                                        <LabelMember>{item.label}</LabelMember>
                                    </ContentMembers>
                                ))}
                            </ContentModal>
                        </SpaceModalTwo>
                        </HeaderModal>
                    </ContainerModal>
                </WrapperModal>
            </Modal>
            <Container>
                <LabelTop>Ajuda</LabelTop>
                <Items>
                    <FontAwesome name="commenting-o" size={24} color="#B8B8B8" />
                    <Label>Fazer uma pergunta</Label>
                </Items>
                <Items>
                    <Feather name="help-circle" size={24} color="#B8B8B8" />
                    <Label>Perguntas frequentes</Label>
                </Items>
                <Items onPress={() => {
                    setModalVisible(true);
                }}>
                    <MaterialIcons name="privacy-tip" size={24} color="#B8B8B8" />
                    <Label>Política de Privacidade</Label>
                </Items>
            </Container>
        </Header>
    )
}