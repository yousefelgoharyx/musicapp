import React from "react";
import { Text, View } from "react-native";
import Page from "../components/Page";
import VSong, { VSongHolder } from "../components/VSong";
import Input from "../components/Input";
import Modal, { ListItem } from "../components/Modal";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Page title="Search">
      <Modal open={open} onDismiss={() => setOpen(false)}>
        <ListItem icon="add" title="Append" />
        <ListItem icon="play" title="Play" />
        <ListItem icon="heart" title="Add to favourites" />
        <ListItem icon="arrow-down" title="Download" />
      </Modal>
      <Input style={{ marginBottom: 16 }} icon="search" placeholder="Search" />
      <VSong style={{ marginBottom: 16 }} onMore={() => setOpen(true)} />
      <VSong style={{ marginBottom: 16 }} />
      <VSong style={{ marginBottom: 16 }} />
      <VSong style={{ marginBottom: 16 }} />
      <VSong style={{ marginBottom: 16 }} />
      <VSong style={{ marginBottom: 16 }} />
      <VSongHolder />
    </Page>
  );
};

export default Home;
