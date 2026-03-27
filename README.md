# 🚀 Prakash Mandal - Portfolio Website

A modern, premium portfolio website built with React (Vite) and PHP backend.

---

## 📁 Complete File Structure

```
portfolio/
│
├── public/
│   └── index.html                 ← HTML template
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            ← Navigation component
│   │   ├── Hero.jsx              ← Hero section
│   │   ├── About.jsx             ← About section
│   │   ├── Skills.jsx            ← Skills showcase
│   │   ├── Projects.jsx          ← Projects portfolio
│   │   └── Contact.jsx           ← Contact form
│   │
│   ├── App.jsx                    ← Main app component
│   ├── App.css                    ← All styles
│   └── main.jsx                   ← Entry point
│
├── backend/
│   └── contact.php                ← PHP backend API
│
├── package.json                   ← Dependencies
├── vite.config.js                 ← Vite configuration
└── README.md                      ← This file
```

---

## 🛠️ Step-by-Step Setup

### **Step 1: Create Vite Project**

```bash
# Create new Vite project
npm create vite@latest portfolio -- --template react

# Navigate to folder
cd portfolio
```

### **Step 2: Install Dependencies**

```bash
# Install all dependencies
npm install
```

### **Step 3: Create Folder Structure**

```bash
# Inside src/ folder, create components directory
mkdir src/components

# Create backend folder at root level
mkdir backend
```

### **Step 4: Copy All Files**

Copy the content from each artifact file:

1. **public/index.html** ← Copy from "index.html" artifact
2. **src/main.jsx** ← Copy from "main.jsx" artifact
3. **src/App.jsx** ← Copy from "App.jsx" artifact
4. **src/App.css** ← Copy from "App.css" artifact
5. **src/components/Navbar.jsx** ← Copy from "Navbar.jsx" artifact
6. **src/components/Hero.jsx** ← Copy from "Hero.jsx" artifact
7. **src/components/About.jsx** ← Copy from "About.jsx" artifact
8. **src/components/Skills.jsx** ← Copy from "Skills.jsx" artifact
9. **src/components/Projects.jsx** ← Copy from "Projects.jsx" artifact
10. **src/components/Contact.jsx** ← Copy from "Contact.jsx" artifact
11. **backend/contact.php** ← Copy from "contact.php" artifact
12. **package.json** ← Copy from "package.json" artifact
13. **vite.config.js** ← Copy from "vite.config.js" artifact

### **Step 5: Run React App**

```bash
# Start development server
npm run dev
```

✅ React app will run at: **http://localhost:5173**

---

## 🔧 PHP Backend Setup

### **Option 1: Using XAMPP (Recommended)**

1. **Download and Install XAMPP**: https://www.apachefriends.org/
2. **Copy contact.php**:
   - Windows: `C:\xampp\htdocs\contact.php`
   - Mac: `/Applications/XAMPP/htdocs/contact.php`
   - Linux: `/opt/lampp/htdocs/contact.php`
3. **Start Apache** from XAMPP Control Panel
4. Backend URL: `http://localhost/contact.php`

### **Option 2: Using PHP Built-in Server**

```bash
# Navigate to backend folder
cd backend

# Start PHP server on port 8000
php -S localhost:8000
```

Backend URL: `http://localhost:8000/contact.php`

### **Option 3: Using WAMP (Windows)**

1. Install WAMP
2. Copy `contact.php` to `C:\wamp64\www\`
3. Start WAMP
4. Backend URL: `http://localhost/contact.php`

---

## 🔗 Connect Frontend to Backend

In **src/components/Contact.jsx**, update the fetch URL:

```javascript
// Line 14 - Change this URL based on your setup
const response = await fetch('http://localhost/contact.php', {
  // or use: 'http://localhost:8000/contact.php'
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name }),
});
```

---

## 📝 Testing the Contact Form

1. Start React app: `npm run dev`
2. Start PHP backend (XAMPP or `php -S localhost:8000`)
3. Open: `http://localhost:5173`
4. Navigate to Contact section
5. Enter your name and click "Send Message"
6. You should see: "Thank you, [Name]! Message received."

---

## 🎨 Customization Guide

### **Change Your Details**

#### **1. Name & Title**
Edit: `src/components/Hero.jsx`
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="highlight">Your Name</span>
</h1>
<p className="hero-subtitle">
  Your Role | Technologies
</p>
```

#### **2. About Text**
Edit: `src/components/About.jsx`
```javascript
<p className="about-text">
  Your description here...
</p>
```

#### **3. Add/Remove Skills**
Edit: `src/components/Skills.jsx`
```javascript
const skills = [
  { name: 'Java', color: '#f89820' },
  { name: 'Your Skill', color: '#yourcolor' },
  // Add more skills
];
```

#### **4. Add/Edit Projects**
Edit: `src/components/Projects.jsx`
```javascript
const projects = [
  {
    title: 'Your Project Name',
    tech: 'Tech Stack Used',
    github: 'https://github.com/yourusername/repo',
    description: 'Project description'
  },
  // Add more projects
];
```

### **Change Colors**

Edit: `src/App.css`

```css
/* Change gradient from purple to another color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Example: Blue gradient */
background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);

/* Example: Orange gradient */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Example: Green gradient */
background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%);
```

---

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Files will be in dist/ folder
# Upload dist/ folder to your web hosting
```

---

## 🚀 Deployment Options

### **Deploy React App to Netlify**

1. Push code to GitHub
2. Go to [netlify.com](https://www.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### **Deploy React App to Vercel**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### **Deploy PHP Backend**

Upload `contact.php` to:
- **InfinityFree**: Free PHP hosting
- **000webhost**: Free hosting with PHP
- **Hostinger**: Paid hosting
- **Any shared hosting** with PHP support

Then update the API URL in Contact.jsx to your deployed PHP URL.

---

## 🔥 Features

✅ Modern dark theme with gradients  
✅ Smooth animations and transitions  
✅ Fully responsive (mobile + tablet + desktop)  
✅ Sticky navigation with smooth scroll  
✅ Animated hero section  
✅ Skills showcase with hover effects  
✅ Projects portfolio with GitHub links  
✅ Working contact form with PHP backend  
✅ Professional footer  
✅ Clean, maintainable code  

---

## 🐛 Troubleshooting

### **Problem: CORS Error**

**Solution**: Make sure these headers are in `contact.php`:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

### **Problem: Styles Not Loading**

**Solution**: Check if `App.css` is imported in `App.jsx`:
```javascript
import './App.css';
```

### **Problem: Components Not Found**

**Solution**: Ensure all components are in `src/components/` and properly exported:
```javascript
export default ComponentName;
```

### **Problem: PHP Backend Not Working**

**Solutions**:
- Check if Apache is running in XAMPP
- Verify PHP file location (`htdocs` folder)
- Check PHP error logs
- Test PHP directly: visit `http://localhost/contact.php`

---

## 📧 Contact Form Database (Optional)

To save contact submissions to database:

1. Create MySQL database:
```sql
CREATE DATABASE portfolio_db;

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. Uncomment database code in `contact.php` (lines 45-60)
3. Update database credentials

---

## 🎯 Next Steps

- [ ] Add email notifications
- [ ] Add more sections (Experience, Education)
- [ ] Add blog section
- [ ] Implement email field in contact form
- [ ] Add social media links
- [ ] Create downloadable resume
- [ ] Add dark/light theme toggle
- [ ] Add testimonials section

---

## 📱 Mobile Responsive

The portfolio is fully responsive and works on:
- ✅ Mobile phones (320px - 480px)
- ✅ Tablets (481px - 768px)
- ✅ Laptops (769px - 1024px)
- ✅ Desktops (1025px+)

---

## 🙏 Credits

**Developed by**: Prakash Mandal  
**Tech Stack**: React, Vite, PHP, CSS3  
**License**: MIT  

---

## 📞 Support

If you face any issues:
1. Check the troubleshooting section
2. Review all file paths
3. Ensure all dependencies are installed
4. Check browser console for errors

---

**Happy Coding! 🚀**