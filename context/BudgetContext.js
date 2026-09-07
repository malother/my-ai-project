import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { seedData } from '../data/seed';

const STORAGE_KEY = 'family-budget-state-v1';
const BudgetContext = createContext(null);

export function BudgetProvider({ children }) {
  const [data, setData] = useState(seedData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored) setData(JSON.parse(stored));
      setReady(true);
    }).catch(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data, ready]);

  const update = (key, value) => setData((current) => ({ ...current, [key]: typeof value === 'function' ? value(current[key]) : value }));
  const addExpense = (expense) => update('expenses', (items) => [{ ...expense, id: `e${Date.now()}` }, ...items]);
  const addIncome = (income) => update('incomes', (items) => [{ ...income, id: `i${Date.now()}` }, ...items]);
  const toggleBill = (id) => update('bills', (items) => items.map((bill) => bill.id === id ? { ...bill, active: !bill.active } : bill));
  const approveChore = (id) => update('chores', (items) => items.map((chore) => chore.id === id ? { ...chore, status: 'approved' } : chore));
  const addChore = (chore) => update('chores', (items) => [{ ...chore, id: `ch${Date.now()}`, status: 'pending', completed_date: '' }, ...items]);
  const transferAllowance = (kidId, amount) => update('kids', (items) => items.map((kid) => kid.id === kidId ? { ...kid, current_balance: kid.current_balance + amount } : kid));

  return <BudgetContext.Provider value={{ ...data, ready, addExpense, addIncome, toggleBill, approveChore, addChore, transferAllowance }}>{children}</BudgetContext.Provider>;
}

export const useBudget = () => useContext(BudgetContext);
