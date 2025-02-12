# Components Folder Information

## Overview
The `components` folder contains **reusable UI components** that help maintain consistency and modularity throughout the application. Each component is designed to be **self-contained, reusable, and easily maintainable**.

## Folder Structure
```
/components
│── Button.tsx       # Reusable button component
│── Navbar.tsx       # Navigation bar for the application
│── Footer.tsx       # Footer section
│── Card.tsx         # Generic card component for displaying content
│── Modal.tsx        # Modal dialog component
│── FormInput.tsx    # Custom form input field
│── Sidebar.tsx      # Sidebar navigation component
```

---

## File Descriptions

### **1. Button.tsx**
- A **reusable button component** that supports different styles and variants.
- Can be used throughout the application to maintain consistent button styling.
- Accepts props for **text, size, color, and click actions**.

**Example Usage:**
```tsx
import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}
```

---

### **2. Navbar.tsx**
- The **main navigation bar** for the application.
- Contains links for **page routing and authentication actions**.

**Example Usage:**
```tsx
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}
```

---

### **3. Footer.tsx**
- A simple footer component containing **copyright information and additional links**.

**Example Usage:**
```tsx
export default function Footer() {
  return <footer>© 2024 My App. All rights reserved.</footer>;
}
```

---

### **4. Card.tsx**
- A **reusable card component** for displaying content blocks.

**Example Usage:**
```tsx
type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
```

---

### **5. Modal.tsx**
- A **modal dialog component** for displaying pop-up messages or forms.
- Can be toggled on/off via **props**.

**Example Usage:**
```tsx
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

---

### **6. FormInput.tsx**
- A **custom input field component** with validation support.
- Can be extended for different input types (text, password, email, etc.).

**Example Usage:**
```tsx
type InputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({ label, type, value, onChange }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}
```

---

## Best Practices
- **Keep components modular and reusable** – Avoid hardcoding specific styles or values.
- **Use props and state effectively** – Allow components to be dynamic.
- **Follow consistent naming conventions** – Use **PascalCase** for component filenames and exports.
- **Keep styling separate** – Use **CSS modules, TailwindCSS, or styled-components** to style components.

## Contribution
If modifying or adding components:
- Ensure they are **reusable** and follow the existing design system.
- Test for **responsiveness and accessibility**.
- Use **clear documentation and examples** for usage.

📢 **For any new components, consult the development team for consistency.**

