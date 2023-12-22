Introduction 
    • The Ecommerce Application is a web-based platform built using Angular, Spring Boot, and MySQL. It allows users to register, login, browse products, add them to the cart, place orders, and utilize the Super Cart feature to track product prices and receive notifications when the desired price is reached. This document serves as a comprehensive guide to understanding and utilizing the application.
Registration and Login 
  2.1 Registration
    • New users can register by providing their personal information such as name, email address, and password.
    • Upon successful registration, users are granted a unique account in the system.
  2.2 Login
    • Registered users can log in using their email address and password.
    • After successful login, users gain access to their personalized account.
Product Catalog
    • Users can browse the product catalog to view available products.
    • Product listings include details such as name, description, price, and an option to add the product to the cart.
    • Filters and search functionality can be used to narrow down product options.
Cart Management
    • Users can add products to their cart while browsing the catalog.
    • The cart displays the selected products, along with their quantities and prices.
    • Users can update the quantity of products or remove them from the cart.
    • The cart also provides a checkout option to place an order.
Order Placement
    • Users can proceed to place an order from the cart.
    • They need to provide their shipping information, including address and contact details.
    • Once the order is confirmed, the application generates an order ID for tracking purposes.
Super Cart and Price Tracking
    • Users can choose to add a product to the Super Cart.
    • In the Super Cart, users can specify their desired price for the product.
    • The application continuously monitors the product's price.
    • If the product's price falls below the desired price, the user is notified via email.
Automatic Order Placement
    • If the user does not purchase the product after being notified, the application automatically places an order on their behalf.
    • A specific time limit is set after the notification for the user to take action.
    • If the user fails to make a purchase within the specified time, the order is generated automatically.
Technology Stack
    • Front-end: Angular
    • Back-end: Spring Boot
    • Database: MySQL

