import { StyleSheet } from 'react-native';
import tailwind from 'twrnc';

import { Text, View } from '../../components/Themed';

export default function MyLinksScreen() {
  return (
    <View style={tailwind`flex flex-col justify-start items-center p-12`}>
      <Text style={styles.title}>soonTM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
