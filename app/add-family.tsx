import { View, Text, TextInput } from 'react-native'

const AddFamily = () => {
  var familyName = '';
  return (
    <View className='h-full w-full flex-1 justify-items-start items-baseline p-8'>
      <Text className='text-2xl font-bold text-white mb-4'>Family Name</Text>
      <TextInput className='text-xl font-medium text-black rounded-xl bg-white w-11/12 p-2 h-[42px]' placeholder='Family Name' onChangeText={(value) => {value = familyName}} />
      <View className='h-2 w-full bg-gray-500 rounded-2xl'></View>
      <Text className='text-2xl font-bold text-white mb-4'>Family Leader</Text>
      <TextInput className='text-xl font-medium text-black rounded-xl bg-white w-11/12 p-2 h-[42px]' placeholder='Family Name' onChangeText={(value) => {value = familyName}} />
      <Text className='text-2xl font-bold text-white mb-4'>Family Name</Text>
      <TextInput className='text-xl font-medium text-black rounded-xl bg-white w-11/12 p-2 h-[42px]' placeholder='Family Name' onChangeText={(value) => {value = familyName}} />
    </View>
  )
}

export default AddFamily