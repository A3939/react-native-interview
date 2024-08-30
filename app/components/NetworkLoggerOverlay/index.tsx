import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import NetworkLogger, {startNetworkLogging} from 'react-native-network-logger';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose, faTools} from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-native-draggable';
import styles from './style';
import Config from 'react-native-config';
import color from '@utils/Color';
import {scaleWidth} from '@utils/Scale';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function NetworkLoggerOverlay() {
  const [isNetworkLoggerVisible, setVisibleNetworkLogger] = useState(false);

  const disableNetworkLogger =
    Config.DISABLE_NETWORK_LOGGER === 'true' ? true : false;

  useEffect(() => {
    if (!disableNetworkLogger) {
      startNetworkLogging();
    }
  }, []);

  return (
    <>
      {!disableNetworkLogger ? (
        <>
          <Draggable
            maxX={width}
            minX={0}
            x={width - 80}
            y={100}
            minY={20}
            maxY={height}>
            <>
              <Pressable
                style={styles.floatingBtn}
                onPress={() => {
                  setVisibleNetworkLogger(!isNetworkLoggerVisible);
                }}>
                <FontAwesomeIcon
                  icon={faTools}
                  size={scaleWidth(22)}
                  color={color.white}
                />
              </Pressable>
            </>
          </Draggable>
          <Modal
            backdropOpacity={0.5}
            backdropColor={color.grey1}
            hideModalContentWhileAnimating={true}
            onBackdropPress={() => setVisibleNetworkLogger(false)}
            coverScreen={false}
            scrollOffset={50}
            isVisible={isNetworkLoggerVisible}
            style={styles.modalCont}>
            <TouchableWithoutFeedback
              onPress={() => setVisibleNetworkLogger(false)}>
              <View style={styles.closeModalBtn}>
                <FontAwesomeIcon size={scaleWidth(22)} icon={faClose} />
              </View>
            </TouchableWithoutFeedback>
            <NetworkLogger />
          </Modal>
        </>
      ) : null}
    </>
  );
}
