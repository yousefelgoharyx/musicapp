import React from "react";
import Input from "../components/Input";
import Page from "../components/Page";

const Name = ({navigation}) => {
  return (
    <Page onGoBack={()=>navigation.goBack()} title="Email" save back>
      <Input icon="mail" style={{marginBottom:16}} placeholder="Email"/>
      <Input icon="mail" placeholder="Confirm Email"/>
    </Page>
  );
};

export default Name;
