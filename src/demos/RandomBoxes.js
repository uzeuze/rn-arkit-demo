import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ARKit } from 'react-native-arkit';

import { randomNumberInRange, randomHexColor } from '../helper';

export default class RandomBoxes extends Component<{}> {
  state = {
    boxes: []
  };

  handleAddBox = () => {
    this.setState(prevState => ({
      boxes: prevState.boxes.concat(
        <ARKit.Box
          position={{
            x: randomNumberInRange(-0.2, 0.2),
            y: randomNumberInRange(-0.2, 0.2),
            z: randomNumberInRange(-1, -0.4)
          }}
          shape={{
            width: 0.1,
            height: 0.1,
            length: 0.1,
            chamfer: randomNumberInRange(0, 0.5)
          }}
          material={{
            diffuse: {
              color: randomHexColor()
            },
            specular: {
              color: randomHexColor()
            }
          }}
        />
      )
    }));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit style={{ flex: 1 }} debug planeDetection lightEstimation>
          {this.state.boxes.map((box, i) =>
            <View key={i}>
              {box}
            </View>
          )}
          <View style={{ position: 'absolute', bottom: 50, left: 10 }}>
            <TouchableOpacity onPress={this.handleAddBox}>
              <View style={{ padding: 20, backgroundColor: '#fff' }}>
                <Text style={{ backgroundColor: 'transparent' }}>ADD</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ARKit>
      </View>
    );
  }
}
