import { View, Text ,Image} from 'react-native'
import React from 'react'

const UserProfile = () => {
  return (
    <View className='flex-1 items-center mt-5'>
      <Image source={{uri:'https://tse4.mm.bing.net/th/id/OIP.T3-SHAUUu7pdzrIwuNGkdgHaE-?rs=1&pid=ImgDetMain&o=7&rm=3'}} className='bg-gray-100 h-44 w-44 overflow-hidden rounded-full'/>
      <Text>Pikachu EIEI</Text>
    </View>
  )
}

export default UserProfile