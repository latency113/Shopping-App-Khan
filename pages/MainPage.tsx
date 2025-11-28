import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { products } from '../data/items'

const MainPage = ({navigation}:any ) => {
  return (
    <View className='flex-1'>
        <StatusBar barStyle='dark-content'/>

        <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
            <View className='flex-1 items-center'>
                <Text>ร้านค้า</Text>
                <Text>สินค้าที่น่าสนใจ</Text>
            </View>
            <View className='mb-2'>
                <Text>แสดงสินค้าทั้งหมด</Text>
            </View>
            <View className='bg-card bg-white'>
                <View>
                    {products.map((p) => (
                        <TouchableOpacity key={p.id} activeOpacity={0.7} onPress={() => navigation.navigate('Detail',{product: p}) }>
                            <View className='bg-gray-100 h-44 overflow-hidden'>
                              <Image source={{uri: p.image}} resizeMode='cover' className='w-full h-full'
                              onError={(error) => console.log(error)}/>
                            </View>
                            <View>
                              <Text>
                                {p.name}
                              </Text>
                            </View>
                            
                            <View>
                              <Text>
                                ฿{p.price.toLocaleString()} บาท 
                              </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default MainPage