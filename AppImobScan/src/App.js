import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import DocumentScanner from 'react-native-document-scanner';

export default class App extends Component {
    
    state = {
        image : '../assets/images/01.jpg'
    }

    render () {
        return (
            <View>

        <DocumentScanner
            onPictureTaken={data => this.setState({ image: data.image })}
            overlayColor="rgba(255,130,0, 0.7)"
            enableTorch={false}
            brightness={0.3}
            saturation={1}
            contrast={1.1}
            onRectangleDetect={({ stableCounter, lastDetectionType }) => this.setState({ stableCounter, lastDetectionType })}
            detectionCountBeforeCapture={5}
            detectionRefreshRateInMS={50}
            style={{width: 200, height: 200}}
            />

      <Image source={{ uri: 'data:image/jpeg;base64,${this.state.image}'}} resizeMode="contain" />

            <Button
            raised
            icon={{name: 'cached'}}
            title='RAISED WITH ICON' />
            </View>
        );
    }

}