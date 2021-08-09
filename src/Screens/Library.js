import React from "react";
import Page from "../components/Page";
import VSong, { VSongHolder } from "../components/VSong";
import Modal,{ListItem} from "../components/Modal";
const Library = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Page title="Library">
      <Modal open={open} onDismiss={() => setOpen(false)}>
        <ListItem icon="play" title="Play" />
        <ListItem icon="close" title="Remove to favourites" />
        <ListItem icon="arrow-down" title="Download" />
      </Modal>
      <VSong style={{ marginBottom: 16 }} onMore={() => setOpen(true)} />
      <VSong style={{ marginBottom: 16 }} />
      <VSong style={{ marginBottom: 16 }} />
      <VSong style={{ marginBottom: 16 }} />
      <VSongHolder />
    </Page>
  );
};

export default Library;
