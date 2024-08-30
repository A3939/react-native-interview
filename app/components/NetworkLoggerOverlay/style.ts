import {StyleSheet} from 'react-native';
import color from '@utils/Color';
import {scaleHeight, scaleSize} from '@utils/Scale';

const styles = StyleSheet.create({
  floatingBtn: {
    backgroundColor: color.ssOrange,
    padding: scaleSize(16),
    borderRadius: 50,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  modalCont: {
    margin: scaleSize(12),
  },
  closeModalBtn: {
    marginTop: scaleHeight(50),
    padding: scaleSize(8),
    zIndex: 3,
    backgroundColor: color.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'flex-end',
  },
});

export default styles;
