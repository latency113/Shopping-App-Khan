import './global.css'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MainPage from './pages/MainPage'
import ProductDetail from './pages/ProductDetail'
import ShoppingCart from './pages/ShoppingCart'
import UserProfile from './pages/UserProfile'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop:8,
          }
        }}>
          <Tab.Screen name='Home' options={{
            title:'Home', headerShown: false, tabBarIcon: ({color ,size}) => (
              <span style={{fontSize: size, color}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
            )
          }}>
            {() =>(
              <Stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: '#3b82f6'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}>
                <Stack.Screen name='Home' component={MainPage}/>
                <Stack.Screen name='Detail' component={ProductDetail}/>
              </Stack.Navigator>
            )}
            </Tab.Screen>
          <Tab.Screen name='Cart' component={ShoppingCart} options={{
            title:'Cart', headerShown: false, tabBarIcon: ({color ,size}) => (
              <span style={{fontSize: size, color}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></span>
            ),
            tabBarBadge: 10,
          }} />

          <Tab.Screen name='Profile' options={{
            title:'Profile', headerShown: false, tabBarIcon: ({color ,size}) => (
              <span style={{fontSize: size, color}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            ),
          }}>
              {() =>(
              <Stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: '#3b82f6'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}>
                <Stack.Screen name='Profile' component={UserProfile}/>
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App