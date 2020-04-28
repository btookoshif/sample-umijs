import React, { Component } from 'react';
import { History, LocationState } from 'history';
import { Checkbox, Input, Select, Button } from 'antd';

interface MyComponentProps {
  history: History<LocationState>;
}

class Index extends Component<MyComponentProps, {}> {
  state: { asset: JSX.Element[] } = { asset: [] };

  componentWillMount() {
    this.setState({ asset: [this.asset] });
  }

  plainOptions = ['Sender', 'Receiver', 'Peer', 'Gold', 'Silver', 'Bronze'];
  selectAfter = (
    <Checkbox.Group
      options={this.plainOptions}
      defaultValue={['Sender', 'Receiver', 'Peer']}
      onChange={this.onChange}
    />
  );
  asset = (
    <div style={{ marginBottom: 16 }}>
      <Input addonAfter={this.selectAfter} placeholder="field name" />
    </div>
  );
  addAseet() {
    const { asset } = this.state;
    asset.push(this.asset);
  }
  onChange(checkedValues: any) {}

  render() {
    const { asset } = this.state;
    return (
      <div>
        <div>{asset}</div>
        <Button type="link" icon="plus-square" onClick={this.addAseet} />
      </div>
    );
  }
}

export default Index;
