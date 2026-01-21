# Local Tech Store 🛒

## Description
Local Grocer is an all-in-one online grocery shopping application where you can browse and purchase everything for your home office. If you need it, we stock it!

## Features
- 🔐 User authentication (login system)
- 🛍️ Product browsing and search functionality
- 🛒 Shopping cart with add/remove items
- 💳 Checkout process
- 📱 Responsive design for mobile and desktop
- ✨ Clean, modern UI with smooth transitions

## Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** Node.js, Express.js
- **Database:** SQLite
- **Authentication:** bcrypt for password hashing
- **Deployment:** AWS Elastic Beanstalk
- **Payment Integration:** Stripe API (optional)

## Cloud Deployment
This application is deployed on **AWS Elastic Beanstalk**, demonstrating:
- Cloud infrastructure configuration and management
- Scalable web application deployment
- Environment configuration with AWS console
- Single-instance EC2 deployment for cost optimization
- Production-ready Node.js application hosting

The deployment showcases practical DevOps skills including environment setup, dependency management, and cloud platform deployment workflows.

## Usage
1. Enter any email and password to log in (demo authentication)
2. Browse available products
3. Use the search bar to filter products
4. Click "Add to Cart" to add items to your shopping cart
5. Click the cart button to view your cart
6. Proceed to checkout and complete your order

## API Endpoints
- `GET /api/products` - Fetch all products
- `POST /api/register` - Register new user
- `POST /api/login` - User login
- `GET /api/cart/:userId` - Get user's cart
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:userId/:productId` - Remove item from cart
- `POST /api/orders` - Save order
- `GET /api/orders/:userId` - Get user order history

## Screenshots
![Login Screen](<img width="653" height="806" alt="Login" src="https://github.com/user-attachments/assets/3fe94780-5f84-420b-8a18-426f01d5119a" />)
![Product Browse](<img width="655" height="814" alt="browse" src="https://github.com/user-attachments/assets/9cd61c3f-7100-48c0-b1aa-16abe9c01bde" />)
![Shopping Cart](<img width="581" height="836" alt="checkout" src="https://github.com/user-attachments/assets/4ca0c9ff-901b-4099-b2a1-77e8c5db1636" />)
![Order History](<img width="645" height="689" alt="success" src="https://github.com/user-attachments/assets/760f2f4f-daa9-4741-8ac6-32c2c61e62da" />)


## Future Enhancements
- JWT-based authentication with sessions
- Product categories and advanced filtering
- Admin dashboard for inventory management
- Email notifications for orders
- Multi-region AWS deployment
- CI/CD pipeline integration
- Redis caching layer

## Deployed Application
🌐 **Live Demo:** http://localtechstore-env.eba-xgrhec4p.ap-southeast-2.elasticbeanstalk.com/

## License
This project is licensed under the [MIT License](LICENSE).

## Author
**Jovana** - [GitHub](https://github.com/jovana667)

## Acknowledgments
Built as a portfolio project to demonstrate full-stack development skills including frontend design, backend API development, database management, and cloud deployment on AWS.
