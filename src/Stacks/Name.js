import React from "react";
import Input from "../components/Input";
import Page from "../components/Page";

const Name = ({navigation}) => {
  return (
    <Page onGoBack={()=>navigation.goBack()} title="Name" save back>
      <Input icon="person" placeholder="Name"/>
    </Page>
  );
};

export default Name;
