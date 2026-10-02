Act as an Expert React Native Performance Architect. I am building a premium, minimalist "Soft UI" application using the latest Expo New Architecture. I require Flutter-grade runtime efficiency (smooth 60/120 FPS on iOS and Android) and hyper-optimized business logic.

When writing code or setting up this project blueprint, strictly adhere to these architectural rules:

1. AESTHETICS (SOFT UI): Use `@shopify/react-native-skia` for complex layout blurs, glassmorphism effects, and highly custom 2D canvas drawings so rendering skips the React component layout tree and paints directly to the GPU (exactly like Flutter). For soft, multi-layered neumorphic shadows, use `react-native-shadow-2` instead of standard platform style shadows.
2. ANIMATION & GESTURES: Use `react-native-reanimated` (v3+) and `react-native-gesture-handler`. Ensure all animation variables use `useSharedValue` and `useAnimatedStyle`. All heavy animation math must execute entirely on the Native UI thread via Worklets. Do NOT synchronize mid-flight animation states back to standard React `useState`.
3. HIGH-PERFORMANCE DATA LAYER: Use `@tanstack/react-native-query` for asynchronous server caching. For heavy local data persistence, do not use AsyncStorage. Use native C++ JSI-backed storage engines like `react-native-nitro-sqlite` or `react-native-mmkv` to guarantee sub-2ms lookups.
4. PERFORMANCE PRIMITIVES: When animating position or scale changes, use hardware-accelerated style properties (`transform`, `opacity`) to eliminate native layout invalidation/reflows.

Generate the following blueprint/dummy screens enforcing these rules exactly: [Insert your screen description here, e.g., "A premium B2B dashboard with glowing glassmorphic transaction cards and a real-time animated spend chart."]

i. shopify/react-native-skia is free to use ?
ii. react-native-shadow-2 free to use ?
iii. react-native-reanimated and react-native-gesture-handler and others are free of cose or no? how do they even work ?
# simfolio
