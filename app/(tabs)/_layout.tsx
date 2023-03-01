import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number;
}) {
  return <FontAwesome {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'TipLink',
          headerTitleAlign: 'center',
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/tiplink_icon.png')}
              style={{
                height: size,
                width: size,
                tintColor: color,
              }}
            />
          ),
          headerLeft: () => (
            <Link href='/settings' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='cogs'
                    size={24}
                    color={Colors[colorScheme ?? 'light'].tabIconSelected}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='my-links'
        options={{
          title: 'My Links',
          headerTitleAlign: 'center',
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name='list-ul' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
