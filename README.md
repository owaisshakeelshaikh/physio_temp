# RestoreFlex Physiotherapy Clinic

A modern, responsive physiotherapy clinic website built with React, TypeScript, and Tailwind CSS. Features smooth animations, intuitive navigation, and a professional design optimized for patient engagement.

## 🌟 Features

### **Modern Design & Animations**
- Smooth scroll-triggered animations using Intersection Observer
- Custom CSS animations with staggered timing
- Interactive hover effects and micro-interactions
- Gradient text effects and glowing buttons
- Responsive design for all screen sizes

### **Pages & Sections**
- **Home Page**: Hero, About Us, Testimonials, Blog, CTA sections
- **About Page**: Company story, mission & values, timeline, impact metrics
- **Services Page**: Service listings with filtering, treatment process, insurance info
- **Blog Page**: Article listings with categories, search functionality
- **Contact Page**: Appointment booking form, contact information

### **Technical Features**
- Single Page Application (SPA) with React Router
- TypeScript for type safety
- Tailwind CSS for modern styling
- Custom animation system
- Responsive navigation with mobile menu
- Form validation and interactive elements

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/owaisshakeelshaikh/physio_temp.git
   cd physio_temp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### **Build for Production**
```bash
npm run build
```

## 📁 Project Structure

```
physio_temp/
├── public/
│   ├── index.html
│   └── Physiotherapy Clinic.jpg    # Local clinic image
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── About.tsx
│   │   ├── AboutSection.tsx         # Main about section
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   └── Testimonials.tsx
│   ├── pages/                       # Full page components
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ServicesPage.tsx
│   ├── hooks/                       # Custom React hooks
│   │   └── useScrollAnimation.ts    # Scroll-triggered animations
│   ├── animations.css               # Custom animation keyframes
│   ├── App.tsx                      # Main app component with routing
│   ├── index.css                    # Global styles
│   └── index.tsx                    # App entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### **Color Palette**
- **Primary Green**: `#1F7A63` - Main brand color
- **Accent Yellow**: `#FACC15` - Highlights and CTAs
- **Soft Background**: `#F5F7F6` - Light backgrounds
- **Neutral Grays**: Various shades for text and UI elements

### **Typography**
- **Primary Font**: Poppins (headings)
- **System Font**: Inter (body text)
- **Font Weights**: 400, 500, 600, 700 for hierarchy

### **Animation Classes**
- **Scroll Animations**: `animate-fadeIn`, `animate-slideInLeft`, `animate-slideInRight`
- **Interactive Effects**: `hover-lift`, `hover-scale`, `animate-glow`
- **Staggered Timing**: `animate-stagger-1` through `animate-stagger-7`

## 🛠️ Technologies Used

### **Frontend**
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### **Development Tools**
- **React Scripts** - Build tooling
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 🎯 Key Components

### **Animation System**
```typescript
// Custom hook for scroll-triggered animations
const { ref, isIntersecting } = useScrollAnimation();

// Apply animations conditionally
className={`section ${isIntersecting ? 'animate-fadeIn' : 'scroll-animate'}`}
```

### **Navigation**
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Active state indicators
- Hover effects with underline animation

### **Contact Form**
- Form validation
- Success/error states
- Interactive input fields
- Appointment booking functionality

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### **Mobile Features**
- Touch-friendly navigation
- Optimized button sizes
- Responsive grid layouts
- Mobile-first approach

## 🚀 Deployment

### **Netlify**
```bash
npm run build
# Deploy the build/ folder to Netlify
```

### **Vercel**
```bash
npm run build
# Deploy the build/ folder to Vercel
```

### **GitHub Pages**
```bash
# Add homepage to package.json
"homepage": "https://owaisshakeelshaikh.github.io/physio_temp"

# Build and deploy
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**RestoreFlex Physiotherapy Clinic**
- 📍 [Your Address Here]
- 📞 (555) 123-4567
- 📧 info@RestoreFlexphysio.com
- 🌐 [www.RestoreFlexphysio.com](https://www.RestoreFlexphysio.com)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Unsplash for placeholder images
- All contributors and supporters

---

**Built with ❤️ for RestoreFlex Physiotherapy Clinic**
