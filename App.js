// Expo SDK 57
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { BudgetProvider } from './context/BudgetContext';
import MainTabs from './navigation/MainTabs';
import AddExpenseScreen from './screens/AddExpenseScreen';
import AddIncomeScreen from './screens/AddIncomeScreen';
import BudgetScreen from './screens/BudgetScreen';
import BankAccountsScreen from './screens/BankAccountsScreen';
import ManageCardsScreen from './screens/ManageCardsScreen';
import AccountSettingsScreen from './screens/AccountSettingsScreen';
import { colors } from './constants/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return <BudgetProvider><NavigationContainer>
    <StatusBar style="light" />
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="Tabs" component={MainTabs} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="AddIncome" component={AddIncomeScreen} />
      <Stack.Screen name="Budget" component={BudgetScreen} />
      <Stack.Screen name="BankAccounts" component={BankAccountsScreen} />
      <Stack.Screen name="ManageCards" component={ManageCardsScreen} />
      <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
    </Stack.Navigator>
  </NavigationContainer></BudgetProvider>;
}
