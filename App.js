import React, {useState} from "react";
import {
  Box,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import Form from './src/components/Form'
import ListToDo from "./src/components/ListToDo";
function App() {
  const [itens, setItens] = useState([])
  const receiveItem = (item) => {
    const newItens = [...itens, item]
    setItens(newItens)
  }
  const removeItem = (index) => {
    const newItens = itens.filter((item, i) => index !== i)
    setItens(newItens)
  }

  return (
      <NativeBaseProvider>
        <Box safeArea>
          <Form sendItem={receiveItem}></Form>
          <ScrollView>
            <ListToDo itens={itens} removeItem={removeItem}></ListToDo>
          </ScrollView>
        </Box>
      </NativeBaseProvider>
  );
}

export default App