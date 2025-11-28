import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";

const ShoppingCart = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View>
          <View className="bg-white">
            <Text className="text-center"> Items in your cart</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShoppingCart;
