const DrawerNav = createDrawerNavigator(
    {
        Home: TabNav,
    },
    {
        contentComponent: SideMenu
    }
);

class SideMenu extends Component {
    render() {
        return (
            <ScrollView>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                        this.props.navigation.closeDrawer();
                    }
                    }>
                    <Text style={styles.drawerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={() => {
                        this.props.navigation.navigate('TabA');
                        this.props.navigation.closeDrawer();
                    }
                    }>
                    <Text style={styles.drawerText}>Tab-A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={() => {
                        this.props.navigation.navigate('TabB');
                        this.props.navigation.closeDrawer();
                    }
                    }>
                    <Text style={styles.drawerText}>Tab-B</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}