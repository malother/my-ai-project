import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useBudget } from '../context/BudgetContext';
import { colors } from '../constants/theme';
import { Card, Header, Screen, styles } from '../components/ui';

export default function AddExpenseScreen({ navigation }) {
  const { addExpense } = useBudget();
  const [merchant, setMerchant] = useState(''); const [amount, setAmount] = useState(''); const [category, setCategory] = useState('groceries');
  const save = () => { if (!merchant || !amount) return Alert.alert('Missing details', 'Add a merchant and amount first.'); addExpense({ amount: Number(amount), category, merchant, date: '2026-09-07', card_last_four: '4821', split_with: 'Household', note: '', is_recurring: false, budget: 250 }); navigation.goBack(); };
  return <Screen><Header title="Add expense" subtitle="Log it while it is fresh" /><Card>{[['Merchant', merchant, setMerchant, 'e.g. Trader Joe\'s'], ['Amount', amount, setAmount, '0.00']].map(([label, value, setter, placeholder]) => <View key={label} style={{ marginBottom: 17 }}><Text style={form.label}>{label}</Text><TextInput value={value} onChangeText={setter} placeholder={placeholder} placeholderTextColor={colors.subtle} keyboardType={label === 'Amount' ? 'decimal-pad' : 'default'} style={form.input} /></View>)}<Text style={form.label}>Category</Text><View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{['groceries', 'gas', 'kids', 'bills', 'other'].map((item) => <Pressable key={item} onPress={() => setCategory(item)} style={[form.chip, category === item && { backgroundColor: colors.teal, borderColor: colors.teal }]}><Text style={{ color: category === item ? colors.background : colors.muted, fontWeight: '700', fontSize: 12 }}>{item}</Text></Pressable>)}</View></Card><Pressable onPress={save} style={form.button}><Text style={form.buttonText}>Save expense</Text></Pressable></Screen>;
}
const form = { label: { color: colors.muted, fontSize: 12, fontWeight: '700', marginBottom: 8 }, input: { color: colors.white, backgroundColor: colors.background, borderRadius: 12, borderWidth: 1, borderColor: colors.border, padding: 14, fontSize: 15 }, chip: { borderWidth: 1, borderColor: colors.border, backgroundColor: colors.background, paddingHorizontal: 12, paddingVertical: 9, borderRadius: 20 }, button: { backgroundColor: colors.teal, padding: 17, borderRadius: 15, alignItems: 'center', marginTop: 18 }, buttonText: { color: colors.background, fontWeight: '900', fontSize: 15 } };
