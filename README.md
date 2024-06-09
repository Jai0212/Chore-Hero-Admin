# Chore Hero

Chore Hero is a comprehensive full-stack web application designed to connect users with skilled professionals for a variety of services, including cleaning, plumbing, gardening, dog walking, and more. Whether it's a one-time task or a regular service, Chore Hero's talented heroes are here to get your chores done efficiently and reliably.

**Chore Hero Website**: https://chore-hero.netlify.app/  
**Chore Hero Admin Website**: https://chore-hero-admin.netlify.app/  

<a href="https://chore-hero.netlify.app/">
  <p align="center">
    <img width="180" src="https://github.com/Jai0212/Chore-Hero-Admin/assets/86296165/ae5db8b8-41e4-4fdf-969c-b5b7a17bc574">
  </p>
</a>

## Overview
Chore Hero is built using Vite and React for the frontend, and Node.js with Express for the backend. The database is managed with MongoDB, ensuring secure and efficient data handling. The frontend and admin websites are hosted on Netlify, while the backend is hosted on Render.
There is also an admin website to control website changes and for our heroes to add services.

NOTE: This is the admin repository, the frontend and backend repositories can be viewed below:  
**Chore Hero Admin**: https://github.com/Jai0212/Chore-Hero  
**Chore Hero Backend**: https://github.com/Jai0212/Chore-Hero-Backend  


## Features
* **User-Friendly Service Ordering**: Easily order services from a user-friendly website to get your chores done.
* **Admin Control Panel**: An admin website allows heroes to manage and add services, ensuring an up-to-date service offering.
* **Fully Functioning Website**: Features include user sign-up, add to cart, and order placement functionalities.
* **Secure Payment Processing**: Payment authentication is handled using Stripe, with verification through API calls.
* **Robust Authentication System**: Secure user authentication and data protection using middleware and tokenization.
* **Order Management**: Users can view their orders, with their cart and order data securely stored in the database.
* **Responsive Design**: The website is optimized for use on laptops, phones and tablets, providing a seamless experience across all devices.


## Technical Aspects
* **Frontend**: Developed using Vite and React.
* **Backend**: Implemented with Node.js and Express.
* **Languages**: HTML, CSS, and JavaScript.
* **Database**: MongoDB stores login details, user carts, orders, services offered, and hero specializations.
* **Payment Integration**: Stripe is used for secure payment processing.
* **Hosting**: Frontend and admin websites are hosted on Netlify, and the backend is hosted on Render.

<br> 

Packages/Dependencies:
* **mongoose**: connects to MongoDB database
* **axios**: generates api calls
* **cors**: allows frontend-backend interaction
* **express**: establishes routes, middleware and provides web-app framework
* **bcrypt**: encrypts user details for security reasons
* **dotenv**: manages environment variables securely such as API and secret keys
* **jsonwebtoken**: creates tokens for user verification
* **stripe**: integrates payment processing
* **multer**: handles image uploads to the backend
* **validator**: verifies email addresses

<img width="250" height="450" src="https://github.com/Jai0212/Chore-Hero/assets/86296165/720fd4d6-9936-405c-96d3-9ac4b1d527b0">
<img width="250" height="450" src="https://github.com/Jai0212/Chore-Hero/assets/86296165/5bbf3241-4152-4a2b-bfee-101391b3309c">
<img width="600" height="450" src="https://github.com/Jai0212/Chore-Hero/assets/86296165/723e77d6-e194-4f68-87fd-76153fc9fa32">

The frontend and admin website on a phone and tablet

## Usage - Frontend
To experience Chore Hero, visit the website: https://chore-hero.netlify.app/

### Getting Started:
* **Initial Load Time**: Please note that the main services may take about 45 seconds to load initially as the backend activates.
* **Sign Up**: Create an account by signing up on the website.
* **Add Services to Cart**: Browse and select the services you need. You can describe the service and choose a convenient date and time for the task.
* **View Our Heroes**: Scroll to the bottom of the website to see a list of our talented heroes. Click on their icons to view the services they specialize in.
* **Checkout**: After adding the desired services to your cart, proceed to checkout and enter your details.
* **Payment**: You will be redirected to a payment page. Use a Stripe dummy card, which you can find online, to complete the transaction. Your payment will be verified, and your order will be placed.


### Important Notes
* **No Actual Payment**: The payment process is simulated, so no actual transaction will occur.
* **Secure Data**: Although the data will be stored in the database, all your sensitive information, including passwords and personal details, is encrypted and secured using tokenization.
* **Placeholder Data**: The list of heroes on the website is placeholder data.


## Usage - Admin
You can view the admin website from this link: https://chore-hero-admin.netlify.app/  

* **Initial Load Time**: Just like the main website, the admin panel may take about 45 seconds to load initially as the backend activates.
* **Select Hero**: At the top of the admin website, you'll find a dropdown menu. Choose the hero whose admin panel you want to access.
* **Add Services**: You can add a service to the existing list of services from the "Add All Services" tab. This change will be immediately reflected on the main frontend services panel (you might have to reload the frontend website)
* **Add Specializations**: In the "Add Personal Service" tab, you can specify service specializations for the selected hero. These specializations will appear on the frontend when you click on the hero's image.
* **Edit Specializations**: The "Edit Personal Services" tab allows you to modify the service specializations for the selected hero.

NOTE: For any changes made in the admin to be reflected on the frontend, you might have to reload the frontend once.

<img width="900" alt="chore-hero-cart" src="https://github.com/Jai0212/Chore-Hero/assets/86296165/e08a2544-1eba-4b19-b455-aeaea1b593a6">  

The cart page on a laptop

## Sample Usage
To experience the immediate functionality of the website, you can log in to a test account: 

**Email**: test2@gmail.com  
**Password**: test2password

Within this account, multiple orders have been placed, which you can view under "My Orders" (hover over the profile icon). Additionally, some services have been added to the cart for reference.

You can also proceed to place an order using the following sample card details:

**Card Number**: 4000 0078 4000 0001  
*For CVV, expiry date, and name/email, you can enter any arbitrary information.*


## Installation and Requirements
If you wish to run the project locally to modify the project, you may download all the files in all the three repositories:  

Chore Hero: https://github.com/Jai0212/Chore-Hero  
Chore Hero Admin: https://github.com/Jai0212/Chore-Hero-Admin  
Chore Hero Backend: https://github.com/Jai0212/Chore-Hero-Backend  

Chore Hero Frontend and Admin:  
* App.jsx is the main file with primary styling in index.css
* The various components of the webpage are under the src folder
* Assets has all the images used
* Components, context and pages has the various folders and files for each aspect of the webpage

To run the project locally, type the below in the terminal:
```bash
$ npm run dev
```

Chore Hero Backend:
* The main file is server.js to initialize everything
* Uploads folder has all the images uploaded in the backend
* The controllers, routes, models and middleware are in the respective folders

To run the backend locally, type the below in the terminal:
```bash
$ npm run server
```

**NOTE**: The Stripe authentication key, jsonwebtoken key and the MongoDB link are hidden for security purposes, if you wish to modify something, make sure to use your own secret keys


## Acknowledgments
I would like to thank Netlify and Render thanks to which I was able to host the frontend and backend of my project.

Additionally, the pictures for the various services and the header image were all publicly available on Google and thus were used from there.

**NOTE**: No payment made will actually be fully processed. The heroes are placeholder data and the footer contact details are for show.

I worked on this project alone and will not be actively working on this project anymore (I will be creating other related projects). However, I would love any suggestions/feedback/collaborative requests.

Author and Date  
by Jai Joshi  
Updated on 10th June, 2024
