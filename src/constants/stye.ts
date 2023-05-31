import {StyleSheet} from 'react-native'
export const styleGlobal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

export const StyleAuthScreens = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#151515'
  },
  contentText: {
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 20
  },
  textBlack:{
    color: '#151515',
    fontSize: 18

  },
  containerBtn:{
    gap: 20,
  },
  skipBtn: {
    backgroundColor: 'transparent',

  }
 
})