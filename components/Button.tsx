import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import tailwind from 'twrnc';
import { Text, ThemeProps, useThemeColor } from './Themed';

export interface ButtonProps extends PressableProps, ThemeProps {
  children: React.ReactNode;
  darkMode?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Button({ children, onPress, style }: ButtonProps) {
  const color = useThemeColor({}, 'text');

  return (
    <Pressable
      onPress={onPress}
      style={[
        tailwind`flex justify-center items-center px-2 py-4 border rounded-md mb-8`,
        { borderColor: color },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}
