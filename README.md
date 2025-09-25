# Fake-Profile-Detection-By-Saif

A machine learning-based system to detect fake social media profiles using various profile characteristics and patterns.

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.3.3-green)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.3.0-orange)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

![Demo](static/demo.png) <!-- Add a screenshot later -->

## 📖 Overview

This project uses machine learning to identify fake profiles on social media platforms by analyzing various profile attributes such as:
- Profile picture presence
- Username patterns
- Name characteristics  
- Description metrics
- Social activity statistics

## 🚀 Features

- **Web Interface**: User-friendly Flask web application
- **Machine Learning**: Random Forest classifier for accurate predictions
- **REST API**: JSON API for integration with other applications
- **Data Analysis**: Comprehensive exploratory data analysis
- **Model Evaluation**: Detailed performance metrics and visualization

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/saif8888888888888/Fake-Profile-Detection-By-Saif.git
cd Fake-Profile-Detection-By-Saif

2.	Create virtual environment
bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3.	Install dependencies
bash
pip install -r requirements.txt

4.	Prepare the data
•	Place your dataset in the data/ folder
•	Ensure it's named train.csv
📊 Usage
Training the Model
bash
python train_model.py
Running the Web Application
bash
python app.py
Then open http://localhost:5000 in your browser.
Using the API
bash
curl -X POST http://localhost:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{"profile_pic": 1, "nums/length username": 0.2, "fullname words": 2}'

📁 Project Structure
text
Fake-Profile-Detection/
├── app.py                 # Main Flask application
├── train_model.py         # Model training script
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── data/                 # Dataset directory
├── models/               # Trained models
├── notebooks/            # Jupyter notebooks for EDA
├── src/                  # Source code modules
├── static/               # CSS, JS, images
└── templates/            # HTML templates

🤝 Contributing
1.	Fork the repository
2.	Create your feature branch (git checkout -b feature/AmazingFeature)
3.	Commit your changes (git commit -m 'Add some AmazingFeature')
4.	Push to the branch (git push origin feature/AmazingFeature)
5.	Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Saif
•	GitHub: @saif8888888888888
