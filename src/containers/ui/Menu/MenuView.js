import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppStyles, AppSizes, AppColors } from '@theme/';
import { Spacer, Text, Button } from '@ui/';

const MENU_BG_COLOR = '#2E3234';

const styles = StyleSheet.create({
  backgroundFill: {
    backgroundColor: MENU_BG_COLOR,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
  },

  // Main Menu
  menu: {
    flex: 3,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
    padding: 20,
    paddingTop: AppSizes.statusBarHeight,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5), 10),
    fontWeight: '500',
    marginTop: 10,
    color: '#EEEFF0',
  },

  // Menu Bottom
  menuBottom: {
    flex: 1,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  menuBottom_text: {
    color: '#EEEFF0',
  },
});

/* Component ==================================================================== */
class Menu extends Component {
  static propTypes = {
    closeSideMenu: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  static defaultProps = {
    user: null,
  }

  constructor() {
    super();

    this.state = {
      menu: [
        {
          title: 'Growth 技能树',
          onPress: () => { this.props.closeSideMenu(); Actions.app(); },
        },
        {
          title: 'About',
          onPress: () => { this.props.closeSideMenu(); Actions.comingSoon(); },
        },
      ],
    };
  }

  render = () => {
    const { menu } = this.state;

    // Build the actual Menu Items
    const menuItems = [];
    menu.map((item) => {
      const { title, onPress } = item;

      return menuItems.push(
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={onPress}
        >
          <View style={[styles.menuItem]}>
            <Text style={[styles.menuItem_text]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>,
      );
    });

    return (
      <View style={[styles.container]}>
        <View style={[styles.backgroundFill]} />

        <View style={[styles.menuContainer]}>
          <View style={[styles.menu]}>{menuItems}</View>

          <View style={[styles.menuBottom]}>
            <Text style={[styles.menuBottom_text, AppStyles.textCenterAligned]}>
              A Phodal idea
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default Menu;
