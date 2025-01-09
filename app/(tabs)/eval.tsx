import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Eval = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center h-full w-full'>
      <Text className='text-3xl color-red-500'>Eval</Text>
    </SafeAreaView>
  )
}

export default Eval