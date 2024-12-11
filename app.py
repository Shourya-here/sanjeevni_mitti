from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS library
import joblib
import pandas as pd

# Load the saved model
model = joblib.load('crop_recommendation_model.joblib')

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the request
        data = request.json
        N = data.get('n')
        P = data.get('p')
        K = data.get('k')
        ph = data.get('ph')

        # Validate inputs
        if N is None or P is None or K is None or ph is None:
            return jsonify({"error": "Invalid input data"}), 400

        # Create a DataFrame for prediction
        input_data = pd.DataFrame({'N': [N], 'P': [P], 'K': [K], 'ph': [ph]})

        # Predict the crop type
        prediction = model.predict(input_data)
        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
