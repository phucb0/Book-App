const TabNav = createBottomTabNavigator(
    {
      Home: StackNav,
      TabA: TabA,
      TabB: TabB
    },
    {
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {
          fontSize: 18,
        },
        style: {
          backgroundColor: 'aliceblue'
        }
      },
    }
);