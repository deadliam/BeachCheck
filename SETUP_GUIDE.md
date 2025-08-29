# 🚀 Руководство по настройке BeachCheck España

## 📱 Быстрая демонстрация

**Откройте `demo.html` в браузере** для просмотра интерфейса приложения без настройки мобильных SDK.

## 🛠 Полная настройка для разработки

### Предварительные требования

1. **Node.js** (v16 или выше)
2. **npm** или **yarn**
3. **React Native CLI**: `npm install -g @react-native-community/cli`

### Для iOS разработки:
4. **Xcode** (последняя версия)
5. **CocoaPods**: `brew install cocoapods`
6. **iOS Simulator** (устанавливается через Xcode)

### Для Android разработки:
4. **Android Studio**
5. **Android SDK** (API level 28+)
6. **Android Virtual Device (AVD)** или физическое устройство

## 📦 Установка зависимостей

```bash
cd BeachCheckApp
npm install

# Для iOS (только на macOS):
cd ios && pod install && cd ..
```

## 🏃‍♂️ Запуск приложения

### Android
```bash
# Запустить эмулятор Android или подключить устройство
npm run android
```

### iOS (только macOS)
```bash
# Запустить iOS симулятор
npm run ios
```

### Metro Bundler
```bash
# Запустить сервер разработки
npm start
```

## 🔧 Решение проблем

### Проблема с CocoaPods
```bash
# Если pod install не работает:
sudo gem install cocoapods
# или
brew install cocoapods
```

### Проблема с Android SDK
1. Откройте Android Studio
2. SDK Manager → SDK Platforms → установите Android 11+ (API 30+)
3. SDK Tools → установите Android SDK Build-Tools
4. Настройте переменные окружения:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Проблема с Metro порт 8081
```bash
# Убить процесс на порту 8081:
lsof -ti:8081 | xargs kill -9
```

## 🏗 Структура проекта

```
BeachCheckApp/
├── src/
│   ├── screens/
│   │   ├── BeachListScreen.tsx    # Главный экран со списком пляжей
│   │   ├── BeachDetailScreen.tsx  # Детали пляжа
│   │   └── ReportScreen.tsx       # Форма отчета
│   ├── navigation/
│   │   └── AppNavigator.tsx       # Настройка навигации
│   ├── types/
│   │   └── index.ts               # TypeScript типы
│   └── data/
│       └── mockData.ts            # Тестовые данные
├── App.tsx                        # Главный компонент
├── package.json                   # Зависимости
└── README.md                      # Документация
```

## 🌐 Альтернативы

### React Native Web (для веб-версии)
```bash
npm install react-native-web react-dom
# Настроить Webpack для веб-сборки
```

### Expo (упрощенная разработка)
```bash
npx create-expo-app BeachCheckExpo
# Скопировать src/ файлы в Expo проект
```

## 📱 Тестирование на устройстве

### iOS (физическое устройство)
1. Подключите iPhone к Mac
2. Откройте Xcode → BeachCheckApp.xcworkspace
3. Выберите ваше устройство
4. Build & Run

### Android (физическое устройство)
1. Включите Developer Options на Android
2. Включите USB Debugging
3. Подключите к компьютеру
4. `npm run android`

## 🚀 Следующие шаги

1. **Backend интеграция**: Замените mock данные на реальный API
2. **Геолокация**: Добавьте определение ближайших пляжей
3. **Push уведомления**: Уведомления о изменениях условий
4. **Карта**: Интеграция с картами для визуализации пляжей
5. **Фото**: Возможность загружать фото пляжей
6. **Аутентификация**: Система пользователей

## 📞 Поддержка

Если возникают проблемы:

1. Проверьте, что все зависимости установлены
2. Убедитесь, что эмулятор/симулятор запущен
3. Перезапустите Metro bundler: `npm start -- --reset-cache`
4. Очистите кэш: `npx react-native start --reset-cache`

---

**Приложение готово к работе!** 🎉 

Начните с демо-файла `demo.html`, затем настройте полную среду разработки для мобильной разработки.

