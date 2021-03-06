
import React, { useState } from 'react';
import { Foundation, AntDesign, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Modal, View } from 'react-native';

import {
    Wrapper,
    Container,
    Image,
    Label,
    CardBody,
    Card,
    Information,
    CircleIcon,
    ButtonPay,
    LabelInfo,
    BannerContainer,
    ContainerModal,
    Description, Details,
    ImageModal,
    LabelModal,
    LabelModalContent,
    ModelReturnOpacity,
    SpaceModalOne,
    SpaceModalTwo,
    TitleBanner,
    WrapperModal,
    ContainerModalScroll,
    VectorModel,
    TitleHelp,
    LabelModalContentTwo
} from './styles';

import img from '../../images/smartphone-green.png'
import mobileAmico from '../../images/image12.png';

export default function WalletPag() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Wrapper> 
            <View>
                <Modal
                    animationType="slide"
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
                                <LabelModal>Adicionar dinheiro</LabelModal>
                            </SpaceModalOne>
                            <SpaceModalTwo>
                                <Feather name="help-circle" size={24} color="#0DB060" />
                            </SpaceModalTwo>

                        </ContainerModal>
                        <ContainerModalScroll>
                            <ImageModal source={mobileAmico} resizeMode="contain" />
                            <LabelModalContent>Op????es para adicionar dinheiro</LabelModalContent>
                            <BannerContainer>
                                <VectorModel>
                                    <Ionicons name="barcode-outline" size={30} color="#0DB060" />
                                </VectorModel>
                                <Details>
                                    <TitleBanner>Boleto Banc??rio</TitleBanner>
                                    <Description>
                                        Dispon??vel em at?? 2 dias ??teis ap??s o pagamento do boleto.
                                    </Description>
                                </Details>
                                <AntDesign name="right" size={24} color="#0DB060" />
                            </BannerContainer>
                            <BannerContainer>
                                <VectorModel>
                                    <MaterialCommunityIcons name="credit-card-outline" size={30} color="#0DB060" />
                                </VectorModel>
                                <Details>
                                    <TitleBanner>Aux??lio emergencial</TitleBanner>
                                    <Description>
                                        Adicione dinheiro com o cart??o de d??bito virtual da Caixa ou boleto banc??rio.
                                    </Description>
                                </Details>
                                <AntDesign name="right" size={24} color="#0DB060" />
                            </BannerContainer>
                            <BannerContainer>
                                <VectorModel>
                                    <MaterialCommunityIcons name="bank-transfer" size={30} color="#0DB060" />
                                </VectorModel>
                                <Details>
                                    <TitleBanner>Transfer???ncia via TED</TitleBanner>
                                    <Description>
                                        Dispon??vel em at?? 3 horas dentro do hor??rio comercial.
                                    </Description>
                                </Details>
                                <AntDesign name="right" size={24} color="#0DB060" />
                            </BannerContainer>
                            <LabelModalContentTwo>Oportunidades para voc??</LabelModalContentTwo>
                            <BannerContainer>
                                <VectorModel>
                                    <MaterialCommunityIcons name="credit-card-plus-outline" size={30} color="#0DB060" />
                                </VectorModel>
                                <Details>
                                    <TitleBanner>Empr??stimo Pessoal</TitleBanner>
                                    <Description>
                                        Contrate 100% online e em poucos passos receba o dinheiro na sua carteira.
                                    </Description>
                                </Details>
                                <AntDesign name="right" size={24} color="#0DB060" />
                            </BannerContainer>
                            <TitleHelp>Saiba mais sobre adicionar dinheiro</TitleHelp>
                        </ContainerModalScroll>
                    </WrapperModal>
                </Modal>
            </View>
            <Container>
                <Image source={img} />
                <Label>Fa??a seu dinheiro render a 100% do CDI, mais que na poupan??a!</Label>
                <CardBody>
                    <Card>
                        <CircleIcon>
                            <Foundation name="dollar" size={20} color="#0DB060" />
                        </CircleIcon>
                        <Information>Rende automaticamente todos os dias ??teis.</Information>
                    </Card>
                    <Card>
                        <CircleIcon>
                            <Foundation name="dollar" size={20} color="#0DB060" />
                        </CircleIcon>
                        <Information>Sem burocracia nem gastos ocultos.</Information>
                    </Card>
                    <Card>
                        <CircleIcon>
                            <Foundation name="dollar" size={20} color="#0DB060" />
                        </CircleIcon>
                        <Information>Voc?? pode continuar usando seu dinheiro para compras e pagamentos como sempre.</Information>
                    </Card>
                </CardBody>
                <ButtonPay onPress={() => {
                    setModalVisible(true);
                }}>
                    <LabelInfo>Fazer meu dinheiro render</LabelInfo>
                </ButtonPay>
            </Container>
        </Wrapper>
    )
}
