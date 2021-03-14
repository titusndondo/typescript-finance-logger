import os
from flask_mongoengine import DynamicDocument
from mongoengine import *
from mongoengine.connection import connect
from mongoengine.document import Document
from mongoengine.fields import IntField, StringField
import uuid

db_acc_name = os.environ['acc_name']
key = os.environ['key']

url = f"mongodb://{db_acc_name}:{key}==@{db_acc_name}.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@{db_acc_name}@"

connect(
    db='testingdb',
    host=url
)


class Transaction(DynamicDocument):

    id = StringField(primary_key=True)
    type = StringField()
    details = StringField()
    amount = IntField()
    name = StringField()


# all = Invoice.objects()
# print([{'client': obj.client} for obj in all])

# id = str(uuid.uuid4())
# inv = Invoice(id=id, client='Tito', details='For Website work', amount='800')
# inv.save()
