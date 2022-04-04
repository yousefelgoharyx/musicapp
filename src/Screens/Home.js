import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Page from '../components/Page';
import HSong, {HSongHolder} from '../components/HSong';
import StyledText from '../components/Text';
import useFetch from '../hooks/useFetch';
import fetchSongs from '../api/fetchSongs';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Home = () => {
  const {data, loading, error} = useFetch(fetchSongs);
  let page = (
    <FlatList
      renderScrollComponent={false}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={DATA}
      renderItem={() => <HSongHolder />}
      keyExtractor={item => item.id}
    />
  );

  if (!loading && !error) {
    page = (
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <HSong name={item.name} image={item.image} artist={item.artist} />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
  return (
    <Page>
      <View style={styles.section}>
        <StyledText style={styles.sectionHead}>Recently played</StyledText>
        {page}
      </View>

      <View style={styles.section}>
        <StyledText style={styles.sectionHead}>Hot</StyledText>
        {page}
      </View>

      <View style={styles.section}>
        <StyledText style={styles.sectionHead}>Popular</StyledText>
        {page}
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHead: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default Home;
