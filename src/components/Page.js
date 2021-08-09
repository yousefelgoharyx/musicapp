import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import StyledText from "./Text";
import Icon from "react-native-vector-icons/Ionicons";
const Page = (props) => {
  let head = null;
  let save = null;
  let back = null;
  if (props.back) {
    back = (
      <TouchableOpacity
        style={styles.goBack}
        activeOpacity={0.6}
        onPress={props.onGoBack}
      >
        <Icon name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>
    );
  }
  if (props.save) {
    save = (
      <TouchableOpacity
        style={styles.saveBtn}
        activeOpacity={0.5}
        onPress={props.onSave}
      >
        <StyledText style={styles.btn}>Save</StyledText>
      </TouchableOpacity>
    );
  }
  if (props.title) {
    head = (
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {back}
          <StyledText semibold style={styles.title}>
            {props.title}
          </StyledText>
        </View>
        {save}
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {head}
        {props.children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    padding: 20,
    marginBottom: 56,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 32 * 1.2,
    textAlign: "center",
  },
  btn: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 14 * 1.2,
  },
  saveBtn: {
    backgroundColor: "#121212",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    height: 32,
  },
  goBack: {
    marginRight: 12,
    backgroundColor: "#121212",
    borderRadius: 8,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Page;
