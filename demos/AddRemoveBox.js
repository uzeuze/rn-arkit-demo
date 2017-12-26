import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ARKit } from 'react-native-arkit';

export default class DemoAddRemoveBox extends Component<{}> {
  state = {
    isBoxVisible: true
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isBoxVisible: !prevState.isBoxVisible
    }));
  };

  render() {
    const { isBoxVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ARKit style={{ flex: 1 }} debug planeDetection lightEstimation>
          {isBoxVisible &&
            <ARKit.Box
              position={{ x: 0, y: 0, z: -0.4 }}
              shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0 }}
              material={{
                diffuse: {
                  color: '#0ebeff'
                }
              }}
            />}
          <View style={{ position: 'absolute', bottom: 50, left: 10 }}>
            <TouchableOpacity onPress={this.handleToggle}>
              <View style={{ padding: 20, backgroundColor: '#fff' }}>
                <Text style={{ backgroundColor: 'transparent' }}>
                  {isBoxVisible ? 'REMOVE' : 'ADD'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ARKit>
      </View>
    );
  }
}
