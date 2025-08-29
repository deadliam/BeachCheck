# BeachCheck España 🏖️

A React Native mobile application that helps tourists and residents in Spain choose the best beach based on real-time user reports about water quality and beach conditions.

## Features

- **Real-time Beach Reports**: Users can view current beach conditions reported by other users
- **Quick Reporting**: Simple interface to quickly report beach conditions
- **Multiple Beach Tracking**: View conditions for various Spanish beaches
- **Time-stamped Updates**: See how recent each report is

## Screens

1. **Beach List**: Overview of all beaches with current conditions
2. **Beach Details**: Detailed view of a specific beach with latest reports  
3. **Report Screen**: Quick form to submit beach conditions

## Beach Conditions Tracked

- 🌊 **Waves**: None / Small / Big
- 💧 **Water Quality**: Clean / Muddy / Dirty  
- 🌬️ **Wind**: Weak / Moderate / Strong
- 👥 **Crowd Level**: Few / Normal / Many

## Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS (requires Xcode):
```bash
npm run ios
```

3. For Android (requires Android Studio):
```bash
npm run android
```

## Development

- Built with React Native and TypeScript
- Uses React Navigation for screen navigation
- Mock data included for development testing
- Designed with modern UI following iOS/Android design principles

## Architecture

```
src/
├── screens/          # Main app screens
├── navigation/       # Navigation configuration
├── types/           # TypeScript type definitions
├── data/            # Mock data and helper functions
└── components/      # Reusable UI components (future)
```

## Future Enhancements

- Integration with real-time weather APIs
- User authentication and profiles  
- Push notifications for beach conditions
- Map view with beach locations
- Photo uploads for beach reports
- Backend API integration

