import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { colors } from '../constants/theme';
import { Screen, Header, Card, styles } from '../components/ui';

export default function QuickAddScreen({ navigation }) {
  const actions = [
    { title: 'Add expense', body: 'Track a purchase or recurring cost', icon: 'arrow-up-circle-outline', color: colors.coral, route: 'AddExpense' },
    { title: 'Add income', body: 'Log a paycheck or other income', icon: 'arrow-down-circle-outline', color: colors.teal, route: 'AddIncome' },
    { title: 'Add a chore', body: 'Create a paid task for the family', icon: 'sparkles-outline', color: colors.lavender, route: 'Family' }
  ];
  return <Screen><Header title="Quick add" subtitle="Keep your budget up to date" />{actions.map((action) => <Pressable key={action.title} onPress={() => navigation.navigate(action.route)} style={{ marginBottom: 13 }}><Card style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}><View style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: `${action.color}20`, alignItems: 'center', justifyContent: 'center' }}><Ionicons name={action.icon} size={25} color={action.color} /></View><View style={{ flex: 1, marginLeft: 15 }}><Text style={{ color: colors.white, fontWeight: '800', fontSize: 16 }}>{action.title}</Text><Text style={styles.subtitle}>{action.body}</Text></View><Ionicons name="chevron-forward" size={19} color={colors.subtle} /></Card></Pressable>)}<Card style={{ marginTop: 12, backgroundColor: '#132f3c', borderColor: '#1c5b60' }}><Text style={{ color: colors.teal, fontWeight: '800' }}>TIP OF THE DAY</Text><Text style={{ color: colors.white, fontSize: 15, lineHeight: 22, marginTop: 8 }}>Small updates make your weekly balance more accurate. Add purchases as they happen.</Text></Card></Screen>;
}
