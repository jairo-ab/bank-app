import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Button, Label } from './styles';


export default function PayButton({ onPress, focused }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                colors={
                    focused
                        ? ['#fff', '#ccc']
                        : ['#00fc6c', '#00ac4a']
                }
                start={[1, 0.2]}
            >
                <MaterialCommunityIcons name="qrcode-scan" size={25} color={focused ? '#000': '#fff'} />
                <Label focused={focused}>Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    );
}