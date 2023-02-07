import React, {PureComponent} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './style';

class OTPTextInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: 0,
      otpText: [],
    };
    this.inputs = [];
  }

  componentDidMount() {
    const {defaultValue, cellTextLength} = this.props;
    if (defaultValue) {
      this.otpText = defaultValue.match(
        new RegExp(`.{1,${cellTextLength}}`, 'g'),
      );
    }
  }

  onTextChange = (text, i) => {
    const {cellTextLength, inputCount, handleTextChange} = this.props;
    this.setState(
      prevState => {
        const {otpText} = prevState;
        otpText[i] = text;
        return {
          otpText,
        };
      },
      () => {
        const {otpText} = this.state;
        handleTextChange(otpText.join(''));
        if (text.length === cellTextLength && i !== inputCount - 1) {
          this.inputs[i + 1].focus();
        }
      },
    );
  };

  onInputFocus = i => {
    this.setState({focusedInput: i});
  };

  onKeyPress = (e, i) => {
    const {otpText = []} = this.state;
    if (e.nativeEvent.key === 'Backspace' && i !== 0 && !otpText[i]) {
      this.inputs[i - 1].focus();
    }
  };

  render() {
    const {
      inputCount,
      tintColor,
      defaultValue,
      cellTextLength,
      containerStyle,
      textInputStyle,
      colors,
      testID,
      ...textInputProps
    } = this.props;
    const {focusedInput} = this.state;
    const TextInputs = [];

    for (let i = 0; i < inputCount; i += 1) {
      let defaultChars = [];
      if (defaultValue) {
        defaultChars = defaultValue.match(
          new RegExp(`.{1,${cellTextLength}}`, 'g'),
        );
      }
      const inputStyle = [styles.textInput, textInputStyle];
      // if (focusedInput === i) {
      //   inputStyle.push({borderColor: tintColor});
      // }

      TextInputs.push(
        <TextInput
          testID={`${testID}${i}`}
          ref={e => {
            this.inputs[i] = e;
          }}
          key={i}
          defaultValue={defaultValue ? defaultChars[i] : ''}
          style={inputStyle}
          maxLength={cellTextLength}
          onFocus={() => this.onInputFocus(i)}
          onChangeText={text => this.onTextChange(text, i)}
          multiline={false}
          onKeyPress={e => this.onKeyPress(e, i)}
          {...textInputProps}
        />,
      );
    }
    return <View style={[styles.container, containerStyle]}>{TextInputs}</View>;
  }
}

export default OTPTextInput;
