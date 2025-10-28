import { Component } from 'react';
import {
    Animated,
    View,
    Pressable,
    Text,
    Easing,
    Platform
} from 'react-native';

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.initiallyOpen || false,
            contentHeight: 0,
        };
        this.animatedHeight = new Animated.Value(props.initiallyOpen ? 1 : 0);
        this.rotateAnim = new Animated.Value(props.initiallyOpen ? 1 : 0);
    }

    toggle = () => {
        const { duration = 250 } = this.props;
        const { open } = this.state;
        this.setState({ open: !open }, () => {
            Animated.timing(this.animatedHeight, {
                toValue: this.state.open ? 1 : 0,
                duration,
                easing: Easing.out(Easing.ease),
                useNativeDriver: false,
            }).start();
            Animated.timing(this.rotateAnim, {
                toValue: this.state.open ? 1 : 0,
                duration,
                easing: Easing.out(Easing.ease),
                useNativeDriver: Platform.OS !== 'web',
            }).start();
        });
    };

    handleContentLayout = (e) => {
        const { height } = e.nativeEvent.layout;
        if (height !== this.state.contentHeight) {
            this.setState({ contentHeight: height });
        }
    };

    render() {
        const {
            title = 'Accordion Title',
            children,
            iconStyle,
            style,
            titleStyle,
            contentStyle,
            butotnStyle
        } = this.props;
        const { contentHeight } = this.state;
        const rotate = this.rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        });
        const heightStyle = contentHeight > 0
            ? {
                height: this.animatedHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, contentHeight],
                })
            } : {};

        return (
            <View style={[{
                borderRadius: 12,
                overflow: 'hidden',
                borderColor: '#ddd',
                borderWidth: 1,
                marginBottom: 8
            }, style]}>
                <Pressable onPress={this.toggle} style={[{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    backgroundColor: '#fafafa'
                }, butotnStyle]}>
                    <Text style={[{ fontSize: 16, fontWeight: '600', color: '#333' }, titleStyle]}>
                        {title}
                    </Text>
                    <Animated.View style={{ transform: [{ rotate }] }}>
                        <Text style={[{ fontSize: 18, color: '#00C853' }, iconStyle]}>
                            {'›'}
                        </Text>
                    </Animated.View>
                </Pressable>
                <Animated.View style={[{ overflow: 'hidden', opacity: this.animatedHeight }, heightStyle]}>
                    <View
                        onLayout={this.handleContentLayout}
                        style={[{
                            paddingHorizontal: 16,
                            paddingVertical: 10,
                            backgroundColor: '#fff',
                        }, contentStyle]}>
                        {children}
                    </View>
                </Animated.View>
            </View>
        );
    }
}
