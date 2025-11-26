# 🛍️ E-Commerce Application

A modern, full-stack e-commerce platform built with React, Node.js, and MongoDB. This application provides a complete shopping experience with user authentication, product management, shopping cart, order processing, and payment integration.

## 🌐 Live Demo

- **Customer App**: `https://forever-frontend-lilac-eight.vercel.app`  
- **Admin Panel**: `https://forever-admin-iota-ten.vercel.app`  
- **Backend API** (optional): `https://e-commerce-app-backend-beta-six.vercel.app`

_Replace the above placeholder links with your actual deployed URLs (e.g., Vercel, Render, etc.)._

## ✨ Features

### Customer Features
- 🏠 **Homepage** with hero section, latest collections, and bestseller products
- 🛒 **Shopping Cart** with quantity management and size selection
- 🔍 **Product Search** functionality
- 📦 **Product Details** page with multiple images and related products
- 👤 **User Authentication** (Registration & Login)
- 📋 **Order Management** - View and track orders
- 💳 **Payment Integration** - Supports both Razorpay and Stripe
- 🎨 **Modern UI** - Built with Tailwind CSS for a responsive design
- 📱 **Responsive Design** - Works seamlessly on all devices

### Admin Features
- 🔐 **Admin Authentication** - Secure admin login
- ➕ **Add Products** - Upload product images, set prices, categories, and sizes
- 📝 **Product Management** - List and manage all products
- 📊 **Order Management** - View and manage customer orders
- 🖼️ **Image Upload** - Cloudinary integration for product images

## 🚀 Tech Stack

### Frontend
- **React** 19.1.1 - UI library
- **React Router DOM** 7.9.1 - Routing
- **Vite** - Build tool and development server
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **React Toastify** 11.0.5 - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express** 5.1.0 - Web framework
- **MongoDB** with **Mongoose** 8.19.2 - Database and ODM
- **JWT** (JSON Web Tokens) 9.0.2 - Authentication
- **bcrypt** 6.0.0 - Password hashing
- **Multer** 2.0.2 - File upload handling
- **Cloudinary** 2.8.0 - Cloud image storage
- **Razorpay** 2.9.6 - Payment gateway
- **Stripe** 19.1.0 - Payment gateway
- **CORS** 2.8.5 - Cross-origin resource sharing

### Admin Panel
- **React** 19.1.1
- **Vite** - Build tool
- **Tailwind CSS** 3.4.18

## 📁 Project Structure

```
Ecommerce app/
├── backend/                 # Backend API server
│   ├── config/             # Configuration files
│   │   ├── cloudinary.js   # Cloudinary setup
│   │   └── mongodb.js      # MongoDB connection
│   ├── controllers/        # Route controllers
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/         # Custom middleware
│   │   ├── adminAuth.js    # Admin authentication
│   │   └── multer.js       # File upload configuration
│   ├── models/             # Database models
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/             # API routes
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   └── server.js           # Entry point
├── frontend/               # Customer-facing frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   └── assets/         # Static assets
│   └── ...
└── admin/                  # Admin panel
    ├── src/
    │   ├── pages/          # Admin pages
    │   └── assets/         # Admin assets
    └── ...
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)
- Razorpay/Stripe account (for payments)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. Start the backend server:
```bash
npm start
# or for development with nodemon
npm run Server
```

The backend server will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed for API URLs):
```env
VITE_API_URL=http://localhost:4000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port Vite assigns)

### Admin Panel Setup

1. Navigate to the admin directory:
```bash
cd admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The admin panel will run on its own port (usually `http://localhost:5174`)

## 🔑 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register a new user
- `POST /login` - User login
- `POST /admin` - Admin login

### Product Routes (`/api/product`)
- `POST /add` - Add a new product (Admin only)
- `POST /remove` - Remove a product (Admin only)
- `POST /single` - Get single product details
- `GET /list` - Get all products

## 📦 Database Models

### User Model
- `name` - User's name
- `email` - User's email (unique)
- `password` - Hashed password
- `cartData` - User's cart data (object)

### Product Model
- `name` - Product name
- `description` - Product description
- `price` - Product price
- `image` - Array of product images
- `category` - Product category
- `subCategory` - Product subcategory
- `sizes` - Available sizes (array)
- `bestseller` - Boolean flag
- `date` - Product creation date

## 🎨 Features in Detail

### Shopping Cart
- Add/remove products
- Quantity management
- Size selection
- Real-time cart updates
- Persistent cart data (stored in user profile)

### Product Management
- Multiple product images
- Category and subcategory organization
- Size variants
- Bestseller flagging
- Product search and filtering

### Payment Integration
- Razorpay integration
- Stripe integration
- Secure payment processing
- Order confirmation

### User Experience
- Responsive design for all screen sizes
- Toast notifications for user actions
- Smooth navigation with React Router
- Modern and clean UI with Tailwind CSS

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Admin route protection
- CORS configuration
- Secure file upload handling

## 🚧 Development Status

This project is currently under development. Some features may be incomplete or in progress.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

G. Mahesh Kumar

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- Cloudinary for image storage
- Razorpay and Stripe for payment integration
- Tailwind CSS for the utility-first CSS framework

## 📧 Contact

For any questions or suggestions, please open an issue in the repository.

---

**Note:** Make sure to set up all environment variables before running the application. The application requires MongoDB, Cloudinary, and payment gateway credentials to function properly.

