import { TipLink } from '@tiplink/api';
import { useState } from 'react';
import { Pressable } from 'react-native';
import tailwind from 'twrnc';
import { Button } from '../../components/Button';

import { MonoText } from '../../components/StyledText';
import { Text, View } from '../../components/Themed';

export default function CreateLinkScreen() {
  const [tipLink, setTipLink] = useState<string | undefined>(undefined);
  const [tipLinkPubKey, setTipLinkPubKey] = useState<string | undefined>(
    undefined
  );

  // Create A New TipLink
  const handleOnClick = async () => {
    // try {
    const tiplink = await TipLink.create();
    console.log('Create A New TipLink', tiplink);
    // setTipLink(tiplink.url.toString());
    // setTipLinkPubKey(tiplink.keypair.publicKey.toBase58());
    // } catch (error) {
    //   console.log('Error creating tiplink', error);
    // }
  };

  return (
    <View style={tailwind`flex flex-col justify-start items-center p-12`}>
      <Button onPress={handleOnClick}>
        <Text>Create TipLink</Text>
      </Button>

      <Text>TipLink:</Text>
      <Text>{tipLink}</Text>
    </View>
  );
}
