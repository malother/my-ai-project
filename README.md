# Family Budget

A portfolio-ready React Native family finance app built with Expo SDK 57. It gives a parent one calm place to understand weekly cash flow, recurring bills, family allowances, and savings goals.

## Highlights

- Home dashboard with weekly balance, safe-to-spend status, upcoming bills, category budgets, and recent activity
- Recurring bills with active/paused toggles
- Quick add flow for expenses, income, and family chores
- Budget goals compared with live seeded spending
- Connected bank accounts and saved payment cards
- Family hub with kid balances, savings goals, chore approval, and allowance actions
- Location/merchant spending insights fallback view
- Local persistence with AsyncStorage and realistic seed data on first launch
- Five-tab navigation: Home, Bills, Add, Location, Family

## Tech

- Expo SDK 57 / React Native 0.81
- React Navigation 7 (bottom tabs and native stack)
- AsyncStorage for local mock persistence
- `@expo/vector-icons` for Expo Go-safe icons
- JavaScript with `screens/`, `components/`, `context/`, `data/`, and `navigation/` folders

## Run

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `a`/`i` when an Android/iOS simulator is available. The project is managed-workflow friendly and does not require ejecting.

## Validation

The project was validated with:

```bash
npx expo export --platform android --no-bytecode --no-minify
```

The Android JavaScript bundle completed successfully. Hermes bytecode generation is disabled for that validation command because the container's Expo toolchain could not generate bytecode; normal `npx expo start` remains the intended development command.
