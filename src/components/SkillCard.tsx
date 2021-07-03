import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({skill, ...rest} : SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
  </TouchableOpacity>
  );
}

export default SkillCard;

const styles = StyleSheet.create({

  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 8
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
})