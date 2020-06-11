import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default class Check extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <Checkbox color="#0e184f"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked: !checked }); }}
      />
    );
  }
}