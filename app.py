#backend flask로 구성
from flask import *
import pymongo

app =Flask(__name__)

uri = 'mongodb://kt:ktpw@15.164.212.26:27017/?authSource=admin'
client = pymongo.MongoClient(uri)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/test')
def test():
    return render_template('test.html')

app.run(debug=True)