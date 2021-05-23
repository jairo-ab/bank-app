import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, StyleSheet, Switch, View } from 'react-native';
import creditCard from '../../images/credit-card.png';
import mobileAmico from '../../images/encryption-amico.png';
import {
    Action,
    ActionLabel,
    Actions,
    AddButton,
    AddLabel,
    BalanceContainer,
    BannerContainer, Bold,
    Card,
    CardBody,
    CardDetails,
    CardInfo,
    CardTitle,
    ContainerModal,
    Description, Details, EyeButton,
    Header,
    HeaderContainer,
    ImageModal, Img, Info,
    LabelModal,
    LabelModalContent,
    ModelReturnOpacity, PaymentMethods,
    PaymentMethodsTitle,
    SpaceModalOne,
    SpaceModalTwo,
    Title,
    TitleBanner, UseBalance,
    UseBalanceTitle,
    UseTicketButton,
    UseTicketContainer,
    UseTicketLabel, Value,
    Wrapper,
    WrapperModal
} from './styles';

export default function Wallet() {

    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Wrapper>
            <Header colors={['#67B26F', '#4ca2cd']}>
                <HeaderContainer>
                    <Title>Saldo PagAgora</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>

                        <EyeButton>
                            <Feather name="eye" size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action onPress={() => {
                            setModalVisible(true);
                        }}>
                            <MaterialCommunityIcons name="cash" size={20} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>

                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </UseBalance>
            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                            </CardTitle>
                            <CardInfo>
                                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PagAgora.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <AddLabel>
                            Adicionar cartão de crédito
                        </AddLabel>
                    </AddButton>
                </Card>

                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                        <UseTicketLabel>
                            Usar código promocional
                        </UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
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
                    <View style={styles.centeredView}>
                        <ImageModal source={mobileAmico} resizeMode="contain" />
                    </View>
                    <LabelModalContent>Opções para adicionar dinheiro</LabelModalContent>
                    <BannerContainer>
                        <Details>
                            <TitleBanner>Boleto Bancário</TitleBanner>
                            <Description>
                                Disponível em até 2 dias úteis após o pagamento do boleto.
                            </Description>
                        </Details>
                    </BannerContainer>
                    <BannerContainer>
                        <Details>
                            <TitleBanner>Boleto Bancário</TitleBanner>
                            <Description>
                                Disponível em até 2 dias úteis após o pagamento do boleto.
                            </Description>
                        </Details>
                    </BannerContainer>
                    <BannerContainer>
                        <Details>
                            <TitleBanner>Boleto Bancário</TitleBanner>
                            <Description>
                                Disponível em até 2 dias úteis após o pagamento do boleto.
                            </Description>
                        </Details>
                    </BannerContainer>
                    <BannerContainer>
                        <Details>
                            <TitleBanner>Boleto Bancário</TitleBanner>
                            <Description>
                                Disponível em até 2 dias úteis após o pagamento do boleto.
                            </Description>
                        </Details>
                    </BannerContainer>
                    <BannerContainer>
                        <Details>
                            <TitleBanner>Boleto Bancário</TitleBanner>
                            <Description>
                                Disponível em até 2 dias úteis após o pagamento do boleto.
                            </Description>
                        </Details>
                    </BannerContainer>
                    </WrapperModal>
                </Modal>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
    },
});