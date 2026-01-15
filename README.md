# 🧮 Advanced Calculator Web App

A modern, production-ready scientific calculator built with Angular 21, featuring clean architecture, comprehensive mathematical operations, and a sleek dark-themed interface.

**Live Demo:** [https://calcweb.vercel.app/](https://calcweb.vercel.app/)

---

## ✨ Features

### 🔢 **Mathematical Operations**
- **Basic Arithmetic:** Addition, Subtraction, Multiplication, Division
- **Scientific Functions:** Square Root (√), Square (x²), Inverse (1/x), Percentage (%)
- **Trigonometric Functions:** Sine, Cosine, Tangent (calculated in degrees)

### 🎨 **User Interface**
- **Dual-Line Display:** Shows both the expression and result (e.g., "8 + 2 = 10")
- **Responsive Grid Layout:** Built with CSS Grid for optimal responsiveness
- **Dark Theme:** Modern, eye-friendly dark interface
- **Ergonomic Design:** 
  - Vertically extended **Equals** button for quick access
  - Vertically extended **Clear** button on the left for easy reset
- **Calculation History:** Track previous operations in reverse chronological order

### 🏗️ **Architecture Highlights**
- **Angular 21 Standalone Components:** No NgModules required
- **Clean Separation of Concerns:** UI and business logic strictly separated
- **Injectable Services:** Core calculation logic in `CalculatorEngineService`
- **Feature-Based Folder Structure:** Scalable and maintainable codebase
- **Production-Ready:** Optimized for deployment and real-world use

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 21+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/advanced-calculator.git
cd advanced-calculator

# Install dependencies
npm install

# Start development server
ng serve

# Navigate to http://localhost:4200
```

### Build for Production

```bash
# Build the app
ng build --configuration production

# Output will be in dist/ folder
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       └── calculator-engine.service.ts    # Business logic
│   ├── features/
│   │   └── calculator/
│   │       ├── calculator.component.ts         # Main UI component
│   │       ├── calculator.component.html       # Template
│   │       ├── calculator.component.scss       # Styles
│   │       └── models/
│   │           └── calculator.models.ts        # TypeScript interfaces
│   ├── shared/
│   │   └── components/                         # Reusable components
│   └── app.component.ts                        # Root component
├── assets/                                     # Static assets
└── styles.scss                                 # Global styles
```

### Architecture Principles

1. **Standalone Components:** All components use Angular 21's standalone API
2. **Service Layer:** Core calculation logic isolated in injectable services
3. **Feature Modules:** Organized by feature for scalability
4. **Type Safety:** Strong TypeScript typing throughout
5. **Separation of Concerns:** UI components don't contain business logic

---

## 🎯 Usage Examples

### Basic Arithmetic
```
8 + 2 = 10
15 - 7 = 8
6 × 4 = 24
20 ÷ 5 = 4
```

### Scientific Functions
```
√64 = 8
5² = 25
1/8 = 0.125
50% = 0.5
```

### Trigonometric Functions
```
sin(30°) = 0.5
cos(60°) = 0.5
tan(45°) = 1
```

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 21.x | Frontend framework |
| **TypeScript** | 5.0+ | Type-safe development |
| **RxJS** | Latest | Reactive programming |
| **CSS Grid** | - | Responsive layout |
| **SCSS** | - | Advanced styling |

---

## 🎨 Design Decisions

### Dark Theme
- Reduces eye strain during extended use
- Modern, professional appearance
- High contrast for accessibility

### Two-Line Display
- **Top Line:** Shows the full expression (e.g., "8 + 2")
- **Bottom Line:** Shows the result (e.g., "10")
- Provides context and clarity for complex calculations

### Extended Buttons
- **Equals Button:** Vertically extended for ergonomic access
- **Clear Button:** Positioned on the left for quick reset

### Degree-Based Trigonometry
- More intuitive for everyday use
- Aligns with common educational standards
- Easy mental calculation verification

---

## 🔧 Configuration

### Environment Variables
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  calculatorPrecision: 10, // Decimal places
  historyLimit: 50 // Max history items
};
```

### Customization Options
- Modify color scheme in `styles.scss`
- Adjust button layout in `calculator.component.scss`
- Configure precision in `calculator-engine.service.ts`

---

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms
The app is a static Angular application and can be deployed to:
- **Netlify:** Drag and drop `dist/` folder
- **GitHub Pages:** Use `angular-cli-ghpages`
- **Firebase Hosting:** `firebase deploy`
- **AWS S3:** Upload `dist/` to S3 bucket


---


## 📋 Roadmap

- [ ] Implement keyboard input support
- [ ] Add history export functionality
- [ ] Support for radians in trigonometric functions
- [ ] Calculation history persistence (LocalStorage)
- [ ] PWA support for offline use
- [ ] Localization (i18n) support

---


## 👤 Author

**Salma Yasser**
- GitHub: [@Salmayasser12](https://github.com/Salmayasser12)
- LinkedIn: [Salma Yasser](https://linkedin.com/in/salma-yasser-207a2a205)

---


## 💻 Code Quality

- ✅ TypeScript strict mode enabled
- ✅ ESLint configured
- ✅ Prettier for code formatting
- ✅ Unit test coverage > 80%
- ✅ No console errors or warnings
- ✅ Accessibility (A11y) compliant

---

## 🔗 Useful Links

- [Angular Documentation](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Vercel Documentation](https://vercel.com/docs)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ using Angular 21

</div>
