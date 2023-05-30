import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StackNavigation } from './components/StackNavigation'

export default function App() {
  return (
    <AppState>
      <StackNavigation/>
      <StatusBar style="auto" />
    </AppState>
  )
}

interface AppState {
  children: JSX.Element[]
}
const AppState = ({children}: AppState) => {
  return (
    <>
        {children}
    </>
  )
}