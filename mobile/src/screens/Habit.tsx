import { useRoute } from "@react-navigation/native";
import { View, ScrollView, Text } from "react-native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";

interface Params {
    date: string
}

export function Habit() {
    const route = useRoute()
    const { date } = route.params as Params

    const parsedDate = dayjs(date)
    const dayOfWeek = parsedDate.format('dddd')
    const dayAndMonth = parsedDate.format('DD/MM')

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />

                <Text className='mt-6 text-zinc-400 font-semibold text-base capitalize'>
                    {dayOfWeek}
                </Text>
            </ScrollView>

        </View>
    )
}