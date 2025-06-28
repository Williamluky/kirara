# Kirara - Luxury Skincare Website

A modern, elegant website for Kirara, a premium skincare brand specializing in sakura-infused body care products. Built with Next.js 15, React 19, and Tailwind CSS.

![Kirara Website Preview](public/kirara-lotion.jpeg)

## 🌸 About Kirara

Kirara offers luxury skincare products featuring the delicate fragrance and nourishing properties of cherry blossoms (sakura). Our signature body lotion combines natural moisturizers with authentic sakura extract to provide long-lasting hydration and an elegant, subtle scent.

### Product Features
- **Deeply hydrating formula** - Provides long-lasting moisture
- **Natural sakura extract** - Authentic Japanese cherry blossom ingredients
- **Suitable for all skin types** - Gentle and non-irritating
- **Elegant, long-lasting fragrance** - Subtle and sophisticated scent

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kirara
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## 🎨 Design System

The website features a carefully crafted design system with:

### Color Palette
- **Sakura Pink** (`#fbb1c8`) - Primary brand color
- **Sakura Light** (`#ffe4ec`) - Light pink accents
- **Sakura Dark** (`#e17b98`) - Darker pink for contrast
- **Skin Light** (`#f8f5f2`) - Creamy off-white background
- **Skin Warm** (`#f5e6d3`) - Warm tan accents

### Typography
- **Display Font**: Playfair Display (Vogue-style headings)
- **Body Font**: Cormorant (Elegant body text)
- **Sans Font**: Arial/Helvetica (Clean sans-serif)

## 📁 Project Structure

```
kirara/
├── public/                 # Static assets
│   ├── kirara-lotion.jpeg  # Product image
│   └── ...                 # Other assets
├── src/
│   └── app/               # Next.js App Router
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Home page
│       ├── globals.css    # Global styles
│       └── favicon.ico    # Site favicon
├── tailwind.config.js     # Tailwind configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🌟 Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, elegant interface with luxury aesthetics
- **Performance Optimized** - Built with Next.js for optimal loading speeds
- **SEO Ready** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
```bash
pnpm build
# Deploy to Vercel using their CLI or GitHub integration
```

### Other Platforms
- **Netlify**: Connect your repository and build with `pnpm build`
- **Railway**: Deploy directly from GitHub
- **Docker**: Build and deploy as a container

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

For questions about this project, please contact the development team.

---

**Kirara** - Nourish your skin with the gentle touch of sakura 🌸
