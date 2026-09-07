import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useBudget } from '../context/BudgetContext';
import { categoryColors, colors } from '../constants/theme';
import { Card, Header, Amount, ProgressBar, SectionTitle, styles, titleCase } from '../components/ui';
import { money } from '../utils/format';

export default function HomeScreen({ navigation }) {
  const { expenses, incomes, bills, budgetGoals } = useBudget();
  const income = incomes.reduce((sum, item) => sum + item.amount, 0);
  const spent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const safe = income - spent - bills.filter((bill) => bill.active).reduce((sum, item) => sum + item.amount, 0);
  const totals = expenses.reduce((result, item) => ({ ...result, [item.category]: (result[item.category] || 0) + item.amount }), {});
  return <ScrollView style={styles.flex} contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
    <Header subtitle="September 7, 2026" onPress={() => navigation.navigate('AccountSettings')} />
    <Card style={{ backgroundColor: colors.tealDark, borderColor: '#18c8b5', marginBottom: 18 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><View><Text style={{ color: '#baf8ef', fontSize: 12, fontWeight: '700' }}>WEEKLY BALANCE</Text><Text style={{ color: colors.white, fontSize: 34, fontWeight: '900', marginTop: 7 }}>{money(safe)}</Text></View><View style={{ width: 44, height: 44, borderRadius: 15, backgroundColor: '#ffffff22', alignItems: 'center', justifyContent: 'center' }}><Ionicons name="trending-up" size={24} color={colors.white} /></View></View>
      <View style={{ flexDirection: 'row', gap: 18, marginTop: 18 }}><Text style={{ color: '#baf8ef', fontSize: 12 }}>INCOME <Text style={{ color: colors.white, fontWeight: '800' }}>{money(income)}</Text></Text><Text style={{ color: '#baf8ef', fontSize: 12 }}>SPENT <Text style={{ color: colors.white, fontWeight: '800' }}>{money(spent)}</Text></Text></View>
    </Card>
    <SectionTitle title="Safe to spend this week" />
    <Card style={{ marginBottom: 20 }}><View style={{ flexDirection: 'row', alignItems: 'center', gap: 13 }}><View style={{ width: 45, height: 45, borderRadius: 15, backgroundColor: `${colors.teal}20`, alignItems: 'center', justifyContent: 'center' }}><Ionicons name="shield-checkmark-outline" size={24} color={colors.teal} /></View><View style={{ flex: 1 }}><Amount value={safe} positive /><Text style={{ color: colors.muted, marginTop: 3, fontSize: 12 }}>You are on track with your plan</Text></View><Text style={{ color: colors.teal, fontWeight: '800', fontSize: 12 }}>ON TRACK</Text></View></Card>
    <SectionTitle title="Bills & recurring" action="See all" onAction={() => navigation.navigate('Bills')} />
    <Card style={{ marginBottom: 20 }}>{bills.slice(0, 3).map((bill, index) => <View key={bill.id} style={[{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }, index > 0 && { borderTopWidth: 1, borderTopColor: colors.border }]}><View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: colors.cardSoft, alignItems: 'center', justifyContent: 'center' }}><Ionicons name="repeat" size={17} color={colors.teal} /></View><View style={{ flex: 1, marginLeft: 11 }}><Text style={{ color: colors.white, fontWeight: '700' }}>{bill.merchant}</Text><Text style={{ color: colors.muted, fontSize: 11, marginTop: 3 }}>Due {bill.due}</Text></View><Amount value={bill.amount} /></View>)}</Card>
    <SectionTitle title="Expense tracker" action="View budget" onAction={() => navigation.navigate('Budget')} />
    <Card style={{ marginBottom: 20 }}>{budgetGoals.map((goal, index) => <View key={goal.id} style={{ marginBottom: index === budgetGoals.length - 1 ? 0 : 17 }}><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}><Text style={{ color: colors.white, fontSize: 13, fontWeight: '700' }}>{titleCase(goal.category)}</Text><Text style={{ color: colors.muted, fontSize: 12 }}>{money(totals[goal.category] || 0)} / {money(goal.target_amount)}</Text></View><ProgressBar value={((totals[goal.category] || 0) / goal.target_amount) * 100} color={categoryColors[goal.category]} /></View>)}</Card>
    <SectionTitle title="Recent activity" /><Card>{expenses.slice(0, 4).map((expense) => <View key={expense.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 7 }}><View style={{ width: 35, height: 35, borderRadius: 11, backgroundColor: `${categoryColors[expense.category]}20`, alignItems: 'center', justifyContent: 'center' }}><Ionicons name="arrow-up" size={16} color={categoryColors[expense.category]} /></View><View style={{ flex: 1, marginLeft: 11 }}><Text style={{ color: colors.white, fontWeight: '700' }}>{expense.merchant}</Text><Text style={{ color: colors.muted, fontSize: 11, marginTop: 3 }}>{titleCase(expense.category)} · {expense.date}</Text></View><Amount value={expense.amount} /></View>)}</Card>
  </ScrollView>;
}
