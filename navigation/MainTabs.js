import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import BillsScreen from '../screens/BillsScreen';
import QuickAddScreen from '../screens/QuickAddScreen';
import LocationInsightsScreen from '../screens/LocationInsightsScreen';
import FamilyScreen from '../screens/FamilyScreen';

const Tab = createBottomTabNavigator();
const icons = { Home: 'home-outline', Bills: 'receipt-outline', Add: 'add', Location: 'analytics-outline', Family: 'people-outline' };

export default function MainTabs() {
  return <Tab.Navigator screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: true,
    tabBarActiveTintColor: colors.teal,
    tabBarInactiveTintColor: colors.subtle,
    tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border, height: 72, paddingBottom: 10, paddingTop: 7 },
    tabBarLabelStyle: { fontSize: 10, fontWeight: '700' },
    tabBarIcon: ({ color, focused }) => <Ionicons name={icons[route.name]} size={route.name === 'Add' ? 25 : 21} color={route.name === 'Add' ? colors.white : color} />,
    tabBarButton: undefined,
    tabBarItemStyle: route.name === 'Add' ? { marginTop: -21, height: 67 } : undefined,
    tabBarIconStyle: route.name === 'Add' ? { width: 58, height: 58, borderRadius: 30, backgroundColor: colors.teal, alignItems: 'center', justifyContent: 'center', shadowColor: colors.teal, shadowOpacity: 0.55, shadowRadius: 12, shadowOffset: { width: 0, height: 7 }, elevation: 10 } : undefined
  })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Bills" component={BillsScreen} />
    <Tab.Screen name="Add" component={QuickAddScreen} options={{ tabBarLabel: '' }} />
    <Tab.Screen name="Location" component={LocationInsightsScreen} />
    <Tab.Screen name="Family" component={FamilyScreen} />
  </Tab.Navigator>;
}
