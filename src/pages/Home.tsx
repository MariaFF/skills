import React, { useState } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  FlatList
} from 'react-native';

import Button from '../components/Button'
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([])

  const handleAddSkills = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(prevState => [...prevState, data])
  }

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        onPress={handleAddSkills}
        title="Add"
      />

      <Text style={[styles.title, {marginVertical: 20}]}>My Skills</Text>

      <FlatList
        keyExtractor={item => item.id}
        data={mySkills}
        renderItem={({item: skill}) => (
          <SkillCard 
            skill={skill.name} 
            onPress={() => handleRemoveSkill(skill.id)}
          />
        )}
      />

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },

})