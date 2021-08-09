import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Modal, Portal, Text } from "react-native-paper";
import StyledText from "./Text";
import Icon  from "react-native-vector-icons/Ionicons";
const CModal = (props) => {
  return (
    <Portal>
      <Modal
        visible={props.open}
        onDismiss={props.onDismiss}
        contentContainerStyle={styles.modal}
      >
        {props.children}
      </Modal>
    </Portal>
  );
};

export const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.listItem}>
      <Icon name={props.icon} size={24} color="#fff" />
      <StyledText style={styles.text}>{props.title}</StyledText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#121212",
    margin: 24,
    borderRadius: 16,
    overflow: "hidden",
  },
  listItem: {
    padding: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    lineHeight: 16 * 1.2,
    marginLeft: 8,
  },
});
export default CModal;
