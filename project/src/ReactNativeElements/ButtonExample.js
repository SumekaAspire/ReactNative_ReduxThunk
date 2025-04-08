import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from '@rneui/themed';

const ButtonExample = () => {
  return (
    <View>
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button size="sm">learn</Button>
      <Button title="Clear" type="clear" />

      <Button title="md">learn</Button>
      <Button title="Clear" type="clear" />

      <Button title="lg">learn</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
      

      <Button disabled>Disabled</Button>
            <Button title='Solid' type='solid' loading />

            <Text>Icon Button</Text>
            <Button size='md'>Save
                <Icon name='save' color="black" />
            </Button>
            <Button size='md'onPress={() => Alert.alert("Upload the file.")}>
            <Icon name='save' color="white" /> File   
            </Button>

    </View>
  );
};

export default ButtonExample;
