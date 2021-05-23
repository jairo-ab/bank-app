import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import PayButton from './components/PayButton';
import WalletPag from './screens/Wallets';
import PayScreen from './screens/Pay';
import Start from './screens/Start';
import Settings from './screens/Settings';
import Notifications from './screens/Notifications'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notification: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    }
}

export default function Navigation() {
    return (
        <Tab.Navigator
        initialRouteName="Wallet"
           screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Pay') {
                        return ( 
                            <PayButton 
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused} 
                            />
                        )
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
           })} 
           tabBarOptions={{
               style: {
                   backgroundColor: '#0DB060',
                   borderTopColor: 'rgba(255, 255, 255, 0.2)'
               },
               activeTintColor: '#FFF',
               inactiveTintColor: '#4448'
           }}
        >
            <Tab.Screen 
                name="Home" 
                component={Start} 
                options={{
                    title: 'Início',
                }}
            />
            <Tab.Screen 
                name="Wallet" 
                component={WalletPag} 
                options={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen 
                name="Pay" 
                component={PayScreen} 
                options={{
                    title: ''
                }}
            />
            <Tab.Screen 
                name="Notification" 
                component={Notifications} 
                options={{
                    title: 'Notificações'
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    title: 'Configurações'
                }}
            />
        </Tab.Navigator>
    )
}