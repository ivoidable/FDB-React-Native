import AsyncStorage from '@react-native-async-storage/async-storage';

type Member = {
    name: string,
    age: number,
    bio: string,
    birthday: string,
    gender: string,
}

type Family = {
    name: string,
    memebers: Member[],
    score: number
}

export function saveFamily(family: Family) {
    AsyncStorage.setItem(family.name, JSON.stringify(family));
}

async function getFamiliesFromKeys(keys: readonly string[]) {
    var families: Family[] = [];
    for (var i = 0; i < keys.length; i++) {
        var family = await AsyncStorage.getItem(keys[i]).then((value) => value ? JSON.parse(value) : null);
        families.push(family as Family);
    }
    return families;
}

export async function getFamilies() {
    var familiesList = AsyncStorage.getAllKeys().then((value) => value ? getFamiliesFromKeys(value) : null);
    return await familiesList.then((value) => value as Family[]);
}

export async function getFamily(id: string) {
    var shite =  AsyncStorage.getItem(id).then((value) => value ? JSON.parse(value) : null);
    return await shite.then((value) => value as Family);
}