import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Page from "../components/Page";
import HSong, { HSongHolder } from "../components/HSong";
import StyledText from "../components/Text";
import src from "../../assets/believer.jpg";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Home = () => {
  const [songs, setSongs] = React.useState({
    loading: true,
    error: false,
    data: [],
  });

  React.useEffect(() => {
    setTimeout(() => {
      fetch(
        "http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
      )
        .then((res) => res.json())
        .then((data) => {
          setSongs({ loading: false, error: false, data: data });
        })
        .catch(() => {
          setSongs({ loading: false, error: true, data: [] });
        });
    }, 3000);
    
  }, []);
  let page = (
    <View style={styles.section}>
      <StyledText style={styles.sectionHead}>Recently played</StyledText>
      <FlatList
        horizontal
        data={DATA}
        renderItem={() => (
          <HSongHolder/>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
  
  if (!songs.loading && !songs.error) {
    page = (
      <View style={styles.section}>
        <StyledText style={styles.sectionHead}>Recently played</StyledText>
        <FlatList
          horizontal
          data={songs.data.tracks}
          renderItem={(track) => (
            <HSong
              name={track.item.name}
              image={src}
              artist={track.item.artistName}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
    
  }
  return (
    <Page>
      {page}
      {page}
      {page}
    </Page>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHead: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default Home;
