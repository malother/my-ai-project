export const seedData = {
  expenses: [
    { id: 'e1', amount: 86.42, category: 'groceries', merchant: 'Whole Foods', date: '2026-09-06', card_last_four: '4821', split_with: 'Household', note: 'Weekly groceries', is_recurring: false, budget: 420 },
    { id: 'e2', amount: 54.9, category: 'gas', merchant: 'Shell', date: '2026-09-05', card_last_four: '4821', split_with: 'Household', note: '', is_recurring: false, budget: 160 },
    { id: 'e3', amount: 32.5, category: 'kids', merchant: 'Target', date: '2026-09-04', card_last_four: '1094', split_with: 'Maya', note: 'School supplies', is_recurring: false, budget: 180 },
    { id: 'e4', amount: 74.2, category: 'other', merchant: 'Local Market', date: '2026-09-02', card_last_four: '4821', split_with: 'Household', note: '', is_recurring: false, budget: 200 }
  ],
  incomes: [
    { id: 'i1', amount: 2450, type: 'paycheck', frequency: 'biweekly', source: 'Northstar Studio', date: '2026-09-04', note: 'September pay' },
    { id: 'i2', amount: 120, type: 'cash', frequency: 'monthly', source: 'Freelance', date: '2026-09-01', note: '' }
  ],
  bills: [
    { id: 'b1', merchant: 'Rent', amount: 1850, due: 'Sep 08', frequency: 'monthly', active: true, category: 'Home' },
    { id: 'b2', merchant: 'Electric & Water', amount: 142, due: 'Sep 12', frequency: 'monthly', active: true, category: 'Utilities' },
    { id: 'b3', merchant: 'Netflix', amount: 22.99, due: 'Sep 18', frequency: 'monthly', active: true, category: 'Entertainment' }
  ],
  accounts: [
    { id: 'a1', bank_name: 'Chase', account_type: 'checking', account_number_last_four: '4821', balance: 8240.54, is_primary: true, last_synced: '2 min ago' },
    { id: 'a2', bank_name: 'Ally', account_type: 'savings', account_number_last_four: '7702', balance: 12480, is_primary: false, last_synced: '2 min ago' }
  ],
  cards: [
    { id: 'c1', card_number: '4821', card_holder_name: 'Alex Morgan', expiration_date: '09/28', cvv: '***', card_type: 'visa', is_default: true },
    { id: 'c2', card_number: '1094', card_holder_name: 'Alex Morgan', expiration_date: '04/27', cvv: '***', card_type: 'mastercard', is_default: false }
  ],
  kids: [
    { id: 'k1', name: 'Maya', age: 10, card_number: '1094', card_locked: false, current_balance: 84.5, allowance_amount: 18, allowance_frequency: 'weekly', last_allowance_date: '2026-09-05', photo_url: '', auto_deposit_chores: true },
    { id: 'k2', name: 'Eli', age: 7, card_number: '2840', card_locked: false, current_balance: 42, allowance_amount: 12, allowance_frequency: 'weekly', last_allowance_date: '2026-09-05', photo_url: '', auto_deposit_chores: false }
  ],
  kidTransactions: [
    { id: 'kt1', kid_id: 'k1', amount: 12.5, merchant: 'Nintendo eShop', category: 'games', date: 'Today', approved: true, viewed: true },
    { id: 'kt2', kid_id: 'k2', amount: 8, merchant: 'School Cafe', category: 'food', date: 'Yesterday', approved: true, viewed: false }
  ],
  goals: [
    { id: 'g1', kid_id: 'k1', name: 'New art set', description: 'Watercolor studio kit', target_amount: 120, current_amount: 84.5, target_date: 'Oct 15', completed: false },
    { id: 'g2', kid_id: 'k2', name: 'Skateboard', description: 'A bright blue board', target_amount: 90, current_amount: 42, target_date: 'Nov 01', completed: false }
  ],
  chores: [
    { id: 'ch1', kid_id: 'k1', chore_name: 'Tidy bedroom', amount: 4, status: 'completed', due_date: 'Today', completed_date: 'Today' },
    { id: 'ch2', kid_id: 'k1', chore_name: 'Feed the dog', amount: 3, status: 'pending', due_date: 'Tomorrow', completed_date: '' },
    { id: 'ch3', kid_id: 'k2', chore_name: 'Set the table', amount: 2, status: 'pending', due_date: 'Today', completed_date: '' }
  ],
  budgetGoals: [
    { id: 'bg1', type: 'monthly_expense', category: 'groceries', target_amount: 420 },
    { id: 'bg2', type: 'monthly_expense', category: 'gas', target_amount: 160 },
    { id: 'bg3', type: 'monthly_expense', category: 'kids', target_amount: 180 },
    { id: 'bg4', type: 'monthly_expense', category: 'other', target_amount: 200 }
  ]
};
