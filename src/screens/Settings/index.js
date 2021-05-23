import React from 'react';

import { Header, Content } from './styles'

import ConfigInfo from '../../components/ConfigInfo'
import ConfigDatails from '../../components/ConfigDatails'
import ConfigSecurity from '../../components/ConfigSecurity'
import ConfigHelp from '../../components/ConfigHelp'

export default function Settings() {
    return (
        <Header>
            <ConfigInfo />
            <Content>
                <ConfigDatails />
                <ConfigSecurity />
                <ConfigHelp />
            </Content>
        </Header>
    )
}