import FamilyCard from '@/components/FamilyCard'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react';
import { router } from 'expo-router';


const Home = () => {
  // Get Families from database
  return (
    <SafeAreaView className='h-full'>
      <View className='p-4 flex-row justify-between'>
        <Button title='Add Family' onPress={() => {router.push('../add-family')}} />
      </View>
      <ScrollView className='pb-12 mb-12'>
        <FamilyCard id={1} name="Family 1" score={0} members={0} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home