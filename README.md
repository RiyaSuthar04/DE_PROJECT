# Gujarat Yojana Access (ગુજરાત યોજનાઓ એક્સેસ)

A full-stack web platform to help users search, explore, and access Gujarat government schemes with ease. This project ensures comprehensive access to scheme information, categorized by departments and types.

## 📌 Features

### Frontend (React + Tailwind CSS)
- 🔍 **Comprehensive Search:** Easily find Gujarat government schemes.
- 📂 **Category-wise Scheme Buttons:** Filter schemes by education, agriculture, health, and more.
- 🧾 **Detailed Information:** View scheme details such as benefits, eligibility, and application process.
- 🖼️ **Modern UI:** Responsive design with a clean and user-friendly interface.

### Backend (Node.js + Express + MongoDB)
- 📡 **API Support:** Fetch schemes based on department or category.
- 🗂️ **MongoDB Database:** Stores scheme data for dynamic retrieval.
- 🔐 **Scalable Architecture:** RESTful API structure supporting future expansion.

## 🔧 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React, Tailwind CSS    |
| Backend    | Node.js, Express       |
| Database   | MongoDB                |
| Tools      | Git, GitHub, VS Code   |

## 🗂️ Project Structure


```bash
SE\_PROJECT/
├── frontend/         # React frontend
│   ├── src/components
│   ├── src/pages
│   ├── public/
│   └── ...
├── backend/          # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── scripts/      # Contains data seeding scripts
│   │   └── addSchemes.js
│   ├── server.js
│   └── ...
└── README.md
```


## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/RiyaSuthar04/DE_PROJECT.git
cd DE_PROJECT
````

### 2. Start the Backend

```bash
cd backend
npm install
node server.js
```

### 3. Start the Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧩 Data Insertion (Important Step)

To initially load scheme and category data into MongoDB:

### 📂 Navigate to the backend folder

```bash
cd backend
```

### ⚙️ Run the data script

```bash
node scripts/addSchemes.js
```

* This script adds scheme data with category names into the database.
* To insert schemes for **a different category**, just change the value of the `category` field in the `addSchemes.js` file and run it again.

> ⚠️ Make sure MongoDB is running and connected before executing the script.



## 📸 Screenshots

| Feature                      | Screenshot |
| ---------------------------- | ---------- |
| About Platform with Features | ✅ Included |
| Category Scheme Buttons      | ✅ Included |
| Scheme Detail Page           | ✅ Included |

## 🤝 Contribution

If you'd like to contribute, feel free to fork the repo and raise a pull request.

## 📜 License

This project is licensed under the MIT License.




