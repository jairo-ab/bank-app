import React from 'react';
import { Feather, MaterialIcons, Octicons, Ionicons } from '@expo/vector-icons';
import { Header, Container, LabelTop, Label, Items } from './styles'

export default function ConfigSecurity() {
    return (
        <Header>
            <Container>
                <LabelTop>Configurações</LabelTop>
                <Items>
                    <Feather name="bell" size={24} color="#B8B8B8" />
                    <Label>Notificações e Sons</Label>
                </Items>
                <Items>
                    <MaterialIcons name="lock-outline" size={24} color="#B8B8B8" />
                    <Label>Privacidade e Segurança</Label>
                </Items>
                <Items>
                    <Octicons name="database" size={24} color="#B8B8B8" />
                    <Label> Dados e Armazenamento</Label>
                </Items>
                <Items>
                    <Ionicons name="settings-outline" size={24} color="#B8B8B8" />
                    <Label>Configurações do App</Label>
                </Items>
                <Items>
                    <MaterialIcons name="computer" size={24} color="#B8B8B8" />
                    <Label>Dispositivos</Label>
                </Items>
                <Items>
                    <MaterialIcons name="language" size={24} color="#B8B8B8" />
                    <Label>Idiomas</Label>
                </Items>
            </Container>
        </Header>
    )
}