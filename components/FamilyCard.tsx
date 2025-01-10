import { View, Text, Pressable, TouchableOpacity } from 'react-native'

type FamilyCardProps = {
    id: number
    name: string
    score: number
    members: number
}
const FamilyCard = (props: FamilyCardProps) => {
  return (
    <TouchableOpacity className='m-4 p-2 rounded-xl bg-red-500 bg- min-h-[60px] justify-center items-baseline'>
        <Text className="text-3xl font-black text-white pl-4">{props.name}</Text>
        <Text className="text-xl font-bold text-white pl-4">Score: {props.score}</Text>
        <Text className="text-xl font-bold text-white pl-4">Members: {props.members}</Text>
    </TouchableOpacity>
  )
}

export default FamilyCard