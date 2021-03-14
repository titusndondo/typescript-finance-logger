from models.models import Transaction
from flask import Flask, json, jsonify, request
from flask_cors import CORS
from mongoengine.connection import connect, disconnect
import os
import json
import uuid

disconnect('default')

app = Flask(__name__)
CORS(app)

# db = MongoEngine()

# db.init_app(app)

db_acc_name = os.environ['acc_name']
key = os.environ['key']

url = f"mongodb://{db_acc_name}:{key}==@{db_acc_name}.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@{db_acc_name}@"

connect(
    db='testingdb',
    host=url
)


@app.route('/')
def index():
    return {'status': 'successful'}


@app.route('/all', methods=['GET'])
def get_all():
    all = [
        {
            'type': obj.type,
            'details': obj.details,
            'amount': obj.amount,
            'name': obj.name
        }
        for obj in Transaction.objects()
    ]
    # print(all)
    return jsonify(all)


@app.route('/add', methods=['POST'])
def add():
    data = json.loads(request.data)
    data['id'] = str(uuid.uuid4())

    print(data)
    print(data.keys())
    transaction = Transaction(
        id=data['id'],
        type=data['type'],
        details=data['details'],
        amount=data['amount'],
        name=data['name']
    )
    transaction.save()

    return {'status': 'successfully added document'}


if __name__ == '__main__':
    app.run(debug=True)
