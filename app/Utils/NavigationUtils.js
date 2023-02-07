import {CommonActions} from '@react-navigation/native';

export const resetRoute = (navigation, route, params) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: route, params}],
    }),
  );
};
