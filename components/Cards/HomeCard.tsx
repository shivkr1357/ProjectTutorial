import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, IconButton, Text} from 'react-native-paper';

const HomeCard = () => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardView}>
        <IconButton icon={'camera'} />
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text variant="titleSmall">Card title</Text>
          <Text variant="bodySmall">Card content</Text>
        </Card.Content>
      </View>
      <Card.Cover
        style={styles.cardCover}
        source={{uri: 'https://picsum.photos/700'}}
      />
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    color: 'black',
  },
  cardCover: {
    margin: 10,
  },
  cardView: {
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});
