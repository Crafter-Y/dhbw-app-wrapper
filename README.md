<p align="center">
  <img src="./assets/images/icon.png" alt="DHBW App Wrapper Icon" width="150" />
</p>

# DHBW App Wrapper

**Unofficial wrapper application for [dhbw.app](https://dhbw.app)**

> ⚠️ **Disclaimer**: This is an unofficial, community-maintained application and is not affiliated with, endorsed by, or officially connected to DHBW or dhbw.app in any way.

## About

This is a simple React Native wrapper application that embeds the [dhbw.app](https://dhbw.app) website in a WebView. It provides a native mobile app experience for iOS and Android platforms.

## Local Development

### Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- [EAS CLI](https://docs.expo.dev/build/setup/) - For creating development builds

### Getting Started

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Create a development build**

   ```bash
   eas build -p android --profile development
   ```

   Install the generated build on your device. For iOS, use the same development
   profile with the iOS platform:

   ```bash
   eas build -p ios --profile development
   ```

3. **Start Metro for the development client**

   ```bash
   bun run start
   ```

4. **Open the app**

   Launch the installed development build on your device and connect it to the
   Metro server.

### Additional Commands

```bash
bun run start    # Start the Expo development server
bun run android  # Build and run Android locally
bun run ios      # Build and run iOS locally
bun run lint     # Run ESLint
```

## Links

- [dhbw.app](https://dhbw.app) - The official website
- [Report Issues](https://github.com/Crafter-Y/dhbw-app-wrapper/issues)

## License

CC BY 4.0

dhbw-app-wrapper (c) by Crafter-Y

dhbw-app-wrapper is licensed under a
Creative Commons Attribution 4.0 International License.

You should have received a copy of the license along with this
work. If not, see <https://creativecommons.org/licenses/by/4.0/>.
