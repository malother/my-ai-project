import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/theme';
import { money, titleCase } from '../utils/format';

export function Screen({ children, scroll = true, style }) {
  const content = <View style={[styles.screen, style]}>{children}</View>;
  return scroll ? <View style={styles.flex}>{content}</View> : content;
}

export function Header({ title, subtitle, onPress, icon = 'settings-outline' }) {
  return <View style={styles.header}>
    <View><Text style={styles.kicker}>FAMILY BUDGET</Text><Text style={styles.title}>{title}</Text>{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}</View>
    {onPress ? <Pressable onPress={onPress} style={styles.iconButton}><Ionicons name={icon} size={20} color={colors.white} /></Pressable> : null}
  </View>;
}

export function Card({ children, style }) { return <View style={[styles.card, style]}>{children}</View>; }
export function SectionTitle({ title, action, onAction }) { return <View style={styles.sectionRow}><Text style={styles.sectionTitle}>{title}</Text>{action ? <Pressable onPress={onAction}><Text style={styles.action}>{action}</Text></Pressable> : null}</View>; }
export function ProgressBar({ value, color = colors.teal }) { return <View style={styles.progress}><View style={[styles.progressFill, { width: `${Math.min(Math.max(value, 0), 100)}%`, backgroundColor: color }]} /></View>; }
export function Pill({ label, color = colors.teal }) { return <View style={[styles.pill, { backgroundColor: `${color}22` }]}><Text style={[styles.pillText, { color }]}>{label}</Text></View>; }
export function Amount({ value, positive = false, style }) { return <Text style={[styles.amount, positive && { color: colors.teal }, style]}>{positive ? '+' : ''}{money(value)}</Text>; }
export function EmptyState({ icon = 'sparkles-outline', title, body }) { return <Card style={styles.empty}><Ionicons name={icon} size={28} color={colors.teal} /><Text style={styles.emptyTitle}>{title}</Text><Text style={styles.emptyBody}>{body}</Text></Card>; }

export const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, paddingHorizontal: 20, paddingTop: 18, paddingBottom: 28, backgroundColor: colors.background },
  header: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 },
  kicker: { color: colors.teal, fontSize: 10, fontWeight: '800', letterSpacing: 2 },
  title: { color: colors.white, fontSize: 30, fontWeight: '800', marginTop: 5, letterSpacing: -0.5 },
  subtitle: { color: colors.muted, fontSize: 13, marginTop: 5 },
  iconButton: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border },
  card: { backgroundColor: colors.card, borderRadius: 18, padding: 17, borderWidth: 1, borderColor: colors.border },
  sectionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, marginTop: 5 },
  sectionTitle: { color: colors.white, fontSize: 16, fontWeight: '800' },
  action: { color: colors.teal, fontSize: 12, fontWeight: '700' },
  subtitle: { color: colors.muted, fontSize: 13, marginTop: 5 },
  progress: { height: 7, backgroundColor: '#252d50', borderRadius: 8, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 8 },
  pill: { paddingHorizontal: 9, paddingVertical: 5, borderRadius: 20, alignSelf: 'flex-start' },
  pillText: { fontSize: 11, fontWeight: '800' },
  amount: { color: colors.white, fontSize: 16, fontWeight: '800' },
  empty: { alignItems: 'center', paddingVertical: 30 },
  emptyTitle: { color: colors.white, fontWeight: '800', fontSize: 16, marginTop: 10 },
  emptyBody: { color: colors.muted, textAlign: 'center', marginTop: 6, lineHeight: 20 }
});

export { money, titleCase };
