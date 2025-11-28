import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProductDetail = ({ route, navigation }: any) => {
  const { product } = route.params;
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={{ uri: product.image }} resizeMode="cover" className="bg-gray-100 h-44 overflow-hidden"/>
        <View>
          <View>
            <Text>{product.name}</Text>
          </View>

          <View>
            <Text>{product.description}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8}>
            <Text>เพิ่มลงตะกล้า</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
