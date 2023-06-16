import {Button, Input, Box, HStack, Icon, Text} from "native-base";
import {StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useState} from "react";
export default function Form({sendItem}) {
    const [newItem, setNewItem] = useState()
    const addToList = () => {
        if (!newItem) {
            return;
        }
        sendItem(newItem)
        setNewItem(null)
    }
    return (
        <>
            <Box mt={10} mb={10}>
                <HStack style={styles.formContainer}>
                    <Input variant="outline" width='50%' onChangeText={setNewItem} value={newItem}></Input>
                    <Button marginLeft={5}
                        leftIcon={<Icon as={Ionicons} name="add"/>}
                            onPress={addToList}
                    >
                        Add
                    </Button>
                </HStack>
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: "center",
    },
})