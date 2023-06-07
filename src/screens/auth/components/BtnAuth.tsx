import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface BtnAuthProps {
  text: string
  onPress?: Function
  disabled?: boolean
  bckColor?: string
  textColor?: string
  customStyle?: StyleProp<ViewStyle>
}

export const ButtonForm = ({ onPress = () => {}, text, disabled, textColor = '#fff', bckColor = '#000', customStyle }:BtnAuthProps) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      style={[Style.btnAuth, {
        backgroundColor: bckColor
      }, customStyle]}
      disabled={disabled}
      onPress={() => onPress()}
      >
      
      <Text style={[Style.btnAuthText, {color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const Style = StyleSheet.create({
  btnAuth:{
    padding: 15,
    borderRadius: 5,
  },
  btnAuthText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
})