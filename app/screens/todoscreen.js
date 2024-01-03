import React, { useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import DateInput from '../components/DateInput3';
console.log(Date.now().toString());

const TodoScreen = () => {
  // Init local states
  const [gvalue, setGvalue] = useState(true);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [field2, setfield2] = useState(false);
  const [selectedId, setSelectedId] = useState('2');
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'true',
        value: true,
        color: 'black',
        labelStyle: { fontSize: 18, color: 'black', fontWeight: 'bold' },
      },
      {
        id: '2',
        label: 'false',
        value: false,
        color: 'black',
        labelStyle: { fontSize: 18, color: 'black', fontWeight: 'bold' },
      },
    ],
    [],
  );
  const chooseGender = (selected) => {
    setSelectedId(selected);
    // get tha value of the selected radio button from radioButtons
    radioButtons.map((button) => {
      if (button.id === selected) {
        setGvalue(button.value);
        console.log(button.value);
        setfield2(button.value);
      }
    });
    console.log(selected);
    // setGvalue(gvalue);
    console.log('gvalue', gvalue);
    console.log('filed2', field2);
  };
  // Handle Add Todo
  const handleAddTodo = () => {
    // sturtcure of a single todo item
    // {
    //  id:
    //  title:
    // }

    if (todo === '') {
      return; // early return
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo('');
  };

  // Handle Delete
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  // Handle Edit todo

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');
  };

  // Render todo
  const renderTodos = ({ item, index }) => {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: '#1e90ff',
            borderRadius: 6,
            paddingHorizontal: 6,
            paddingVertical: 4,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            // elevation: for android
          }}>
          <Text
            style={{ color: '#fff', fontSize: 20, fontWeight: '800', flex: 1 }}>
            {item.title}
          </Text>

          <IconButton
            icon="pencil"
            iconColor="#fff"
            onPress={() => handleEditTodo(item)}
          />
          <IconButton
            icon="trash-can"
            iconColor="#fff"
            onPress={() => handleDeleteTodo(item.id)}
          />
        </View>
      </ScrollView>
    );
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{ marginHorizontal: 16, marginTop: 40 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 16,
          }}
          placeholder="Text of LabResult"
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 17,
            color: 'black',
          }}>
          Date:
        </Text>

        <DateInput
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
          setDateFrom={setDateFrom}
        />

        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 16,
          }}
          placeholder="Description"
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        />

        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontStyle: 'italic',
            fontSize: 17,
          }}>
          Approved:
        </Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={chooseGender}
            selectedId={selectedId}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          />
        </View>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 16,
          }}
          placeholder="Field"
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        />
        {editedTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              borderRadius: 6,
              paddingVertical: 2,
              marginVertical: 34,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 3,
            }}
            onPress={() => handleUpdateTodo()}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Update
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              borderRadius: 100,
              paddingVertical: 2,
              marginVertical: 34,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 3,
            }}
            onPress={() => handleAddTodo()}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Add New LabResult
            </Text>
          </TouchableOpacity>
        )}
        {/* Render todo list */}
        <FlatList data={todoList} renderItem={renderTodos} />
        {todoList.length <= 0}
      </View>
    </ScrollView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
