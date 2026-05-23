# ✈️ Flight Reservation Database System

A simple Flight Reservation Database project built using MariaDB/MySQL.  
This project manages users, flights, and flight bookings using SQL queries.

---

# 📌 Features

- User Management
- Flight Management
- Booking Management
- Seat Availability Tracking
- Booking Status Handling

---

# 🛠️ Technologies Used

- MariaDB
- MySQL
- SQL

---

# 📂 Database Setup

## Step 1: Create Database

```sql
CREATE DATABASE flightdb;
```

Check available databases:

```sql
SHOW DATABASES;
```

Use the database:

```sql
USE flightdb;
```

---

# 📌 Step 2: Create Tables

## 👤 Users Table

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ✈️ Flights Table

```sql
CREATE TABLE flights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    airline VARCHAR(100),
    source VARCHAR(100),
    destination VARCHAR(100),
    departure_time DATETIME,
    arrival_time DATETIME,
    price DECIMAL(10,2),
    seats_available INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🎫 Bookings Table

```sql
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    passenger_name VARCHAR(100),
    source VARCHAR(100),
    destination VARCHAR(100),
    departure_date DATE,
    passengers INT,
    price DECIMAL(10,2),
    booking_status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 📌 Step 3: Verify Tables

```sql
SHOW TABLES;
```

---

# 📌 Step 4: Insert Sample Flight Data

```sql
INSERT INTO flights (
    airline,
    source,
    destination,
    departure_time,
    arrival_time,
    price,
    seats_available
)
VALUES
(
    'IndiGo',
    'Mumbai',
    'Dubai',
    '2026-05-25 10:00:00',
    '2026-05-25 13:00:00',
    15000,
    50
),
(
    'Air India',
    'Delhi',
    'London',
    '2026-05-28 08:00:00',
    '2026-05-28 18:00:00',
    55000,
    30
),
(
    'Emirates',
    'Pune',
    'Singapore',
    '2026-05-30 06:00:00',
    '2026-05-30 12:00:00',
    35000,
    25
);
```

---

# 📌 Step 5: View Flights Data

```sql
SELECT * FROM flights;
```

---

# 📌 Step 6: Insert Booking Data

```sql
INSERT INTO bookings (
    passenger_name,
    source,
    destination,
    departure_date,
    passengers,
    price,
    booking_status
)
VALUES
(
    'Aniket More',
    'Pune',
    'Dubai',
    '2026-05-28',
    2,
    25000,
    'CONFIRMED'
);
```

---

# 📌 Step 7: View Booking Data

```sql
SELECT * FROM bookings;
```

---

# 🚀 Project Workflow

1. Create Database
2. Create Required Tables
3. Insert Flight Data
4. Insert Booking Data
5. Fetch and Manage Data

---

# 📊 Database Tables

| Table Name | Purpose |
|------------|----------|
| users | Store user details |
| flights | Store flight information |
| bookings | Store booking details |

---

# 🔥 Future Improvements

- Add Authentication System
- Add Admin Dashboard
- Add Payment Gateway
- Add Real-Time Seat Booking
- Connect Backend API

---

# 👨‍💻 Author

**Aniket More**

---

# ⭐ Conclusion

This project is useful for beginners learning:

- SQL
- Database Design
- MariaDB/MySQL
- Backend Database Integration
- Flight Reservation System Concepts
