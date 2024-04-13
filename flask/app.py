from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Configure your MySQL database connection here
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/restaurant_order_system'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Update the User model to reflect your database schema


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column('user_id', db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    full_name = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.TIMESTAMP, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'


class MenuItem(db.Model):
    __tablename__ = 'menu_items'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    # Adjust type if needed
    price = db.Column(db.Numeric(10, 2), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255), nullable=True)  # Optional
    created_at = db.Column(
        db.TIMESTAMP, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return f'<MenuItem {self.name}>'


class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    telephone = db.Column(db.String(20), nullable=True)
    delivery_address = db.Column(db.Text, nullable=False)
    suburb = db.Column(db.String(255), nullable=True)
    state_territory = db.Column(db.String(255), nullable=True)
    postcode_zip = db.Column(db.String(20), nullable=False)
    country = db.Column(db.String(255), nullable=False)
    same_billing_address = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(
        db.TIMESTAMP, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return f'<Order {self.id}>'


@app.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return jsonify([{
        "id": order.id,
        "email": order.email,
        "first_name": order.first_name,
        "last_name": order.last_name,
        "telephone": order.telephone,
        "delivery_address": order.delivery_address,
        "suburb": order.suburb,
        "state_territory": order.state_territory,
        "postcode_zip": order.postcode_zip,
        "country": order.country,
        "same_billing_address": order.same_billing_address,
        # Format date as string
        "created_at": order.created_at.strftime('%Y-%m-%d %H:%M:%S')
    } for order in orders]), 200


@app.route('/checkout', methods=['POST'])
def handle_checkout():
    data = request.json
    # Assuming 'Order' is the model for your orders table
    new_order = Order(
        email=data['email'],
        first_name=data['firstName'],
        last_name=data['lastName'],
        telephone=data['telephone'],
        delivery_address=data['deliveryAddress'],
        suburb=data['suburb'],
        state_territory=data['stateTerritory'],
        postcode_zip=data['postcodeZip'],
        country=data['country'],
        same_billing_address=data['sameBillingAddress'],
    )
    db.session.add(new_order)
    db.session.commit()

    return jsonify({"message": "Order placed successfully", "order_id": new_order.id}), 201


@app.route('/addmenuitem', methods=['POST'])
def addmenuitem():
    data = request.get_json()
    new_item = MenuItem(
        name=data['name'],
        description=data['description'],
        price=data['price'],
        category=data['category'],
        # Assuming the image_url is optional
        image_url=data.get('image_url', None)
    )
    db.session.add(new_item)
    db.session.commit()

    return jsonify({"message": "Menu item added successfully", "item_id": new_item.id}), 201


@app.route('/menu-items', methods=['POST'])
def add_menu_item():
    data = request.json
    if not all(key in data for key in ['name', 'price', 'category']):
        return jsonify({"message": "Missing data"}), 400

    new_item = MenuItem(
        name=data['name'],
        description=data.get('description', ''),
        price=data['price'],
        category=data['category'],
        image_url=data.get('image_url', '')
    )
    db.session.add(new_item)
    db.session.commit()

    return jsonify({"message": "Menu item added successfully", "item": {"name": new_item.name, "category": new_item.category}}), 201


@app.route('/menu-items', methods=['GET'])
def get_menu_items():
    items = MenuItem.query.all()
    return jsonify([{"name": item.name, "description": item.description, "price": str(item.price), "category": item.category, "image_url": item.image_url} for item in items]), 200

# Signup route


@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if not data or 'email' not in data or 'password' not in data or 'full_name' not in data:
        return jsonify({"message": "Missing data"}), 400

    if User.query.filter_by(email=data['email']).first() is not None:
        return jsonify({"message": "User already exists"}), 400

    hashed_password = generate_password_hash(data['password'])

    new_user = User(
        email=data['email'], password_hash=hashed_password, full_name=data['full_name'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Signup successful", "user": {"email": new_user.email, "full_name": new_user.full_name}}), 201

# Login route


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if not data or 'email' not in data or 'password' not in data:
        return jsonify({"message": "Missing email or password"}), 400

    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password_hash, data['password']):
        return jsonify({"message": "Logged in successfully", "user": {"email": user.email, "full_name": user.full_name}}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

# Test connection route


@app.route('/test')
def test():
    return jsonify({"message": "Flask and React are connected!"})


if __name__ == '__main__':
    app.run(debug=True)
