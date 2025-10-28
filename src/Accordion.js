import { Component } from 'react';
import { Animated, View, Pressable, Text, Platform } from 'react-native';

export default class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: props.initiallyOpen || false,
        };

        this.rotateAnim = new Animated.Value(props.initiallyOpen ? 1 : 0);
    }

    toggle = () => {
        const { duration = 250 } = this.props;
        const { open } = this.state;
        const toValue = open ? 0 : 1;
        this.setState({ open: !open }, () => {
            Animated.timing(this.rotateAnim, {
                toValue,
                duration,
                useNativeDriver: Platform.OS !== "web"
            }).start();
        });
    };

    render() {
        const {
            title = 'Accordion Title',
            children,
            iconStyle,
            style,
            titleStyle,
            contentStyle,
            buttonStyle,
        } = this.props;
        const { open } = this.state;
        const rotate = this.rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        });
        return (
            <View style={[{
                borderRadius: 12,
                borderColor: '#ddd',
                borderWidth: 1,
                marginBottom: 8,
                overflow: 'hidden',
            }, style]}>
                <Pressable onPress={this.toggle} style={[{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    backgroundColor: '#fafafa',
                }, buttonStyle]}>
                    <Text style={[{ fontSize: 16, fontWeight: '600', color: '#333' }, titleStyle]}>
                        {title}
                    </Text>
                    <Animated.View style={{ transform: [{ rotate }] }}>
                        <Text style={[{ fontSize: 18, color: '#00C853' }, iconStyle]}>›</Text>
                    </Animated.View>
                </Pressable>
                {open && (<View style={[{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                }, contentStyle]}>{children}</View>)}
            </View>
        );
    }
}
