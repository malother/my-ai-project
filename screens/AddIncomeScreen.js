import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useBudget } from '../context/BudgetContext';
import { colors } from '../constants/theme';
import { Card, Header, Screen } from '../components/ui';

export default function AddIncomeScreen({ navigation }) {
  const { addIncome } = useBudget(); const [source, setSource] = useState(''); const [amount, setAmount] = useState(''); const [type, setType] = useState('paycheck');
  const save = () => { if (!source || !amount) return Alert.alert('Missing details', 'Add a source and amount first.'); addIncome({ amount: Number(amount), type, frequency: 'monthly', source, date: '2026-09-07', note: '' }); navigation.goBack(); };
  return <Screen><Header title="Add income" subtitle="Capture money coming in" /><Card>{[['Source', source, setSource, 'e.g. Employer or client'], ['Amount', amount, setAmount, '0.00']].map(([label, value, setter, placeholder]) => <View key={label} style={{ marginBottom: 17 }}><Text style={form.label}>{label}</Text><TextInput value={value} onChangeText={setter} placeholder={placeholder} placeholderTextColor={colors.subtle} keyboardType={label === 'Amount' ? 'decimal-pad' : 'default'} style={form.input} /></View>)}<Text style={form.label}>Income type</Text><View style={{ flexDirection: 'row', gap: 8 }}>{['paycheck', 'cash', 'other'].map((item) => <Pressable key={item} onPress={() => setType(item)} style={[form.chip, type === item && { backgroundColor: colors.teal, borderColor: colors.teal }]}><Text style={{ color: type === item ? colors.background : colors.muted, fontWeight: '700', fontSize: 12 }}>{item}</Text></Pressable>)}</View></Card><Pressable onPress={save} style={form.button}><Text style={form.buttonText}>Save income</Text></Pressable></Screen>;
}
const form = { label: { color: colors.muted, fontSize: 12, fontWeight: '700', marginBottom: 8 }, input: { color: colors.white, backgroundColor: colors.background, borderRadius: 12, borderWidth: 1, borderColor: colors.border, padding: 14, fontSize: 15 }, chip: { borderWidth: 1, borderColor: colors.border, backgroundColor: colors.background, paddingHorizontal: 12, paddingVertical: 9, borderRadius: 20 }, button: { backgroundColor: colors.teal, padding: 17, borderRadius: 15, alignItems: 'center', marginTop: 18 }, buttonText: { color: colors.background, fontWeight: '900', fontSize: 15 } };
