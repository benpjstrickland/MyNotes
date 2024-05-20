import { SafeAreaView, Text, View, TextInput } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from '../store';
import 'react-native-reanimated'; 
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import MasonryList from "@react-native-seoul/masonry-list";

function HomeScreen({ navigation }) { // main page
    
    return (
      <View style={tw`flex-1 items-center mt-5`}> 
        <Text style={tw`text-lg mb-4`}>
          Inscript
        </Text>
        <Button 
          title="New Note"
          onPress={() => navigation.navigate('Note')}
        />
      </View>
    );
}

export default HomeScreen;