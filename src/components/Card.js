import {Box, HStack, Stack, Heading, Button} from "native-base";
export default function Card({item, index, removeItem}) {
    return (
        <Box alignItems="center">
            <Box maxW="80" minW="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }} mb="5">
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {item}
                        </Heading>
                    </Stack>
                </Stack>
                <HStack alignSelf="flex-start">
                    <Button colorScheme="error" ml="2" mb="1" onPress={() => removeItem(index)}>Delete</Button>
                </HStack>
            </Box>
        </Box>
    )
}