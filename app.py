from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)
app.config.from_object('app_config')


@app.route('/')
def index():
    return render_template('index.html', body_class="index")


@app.route('/json')
def data():
    data = []
    for i in xrange(12):
        my_rand = random.randint(1, 100)
        temp = {
            'title': 'Hello student ' + str(my_rand),
            'image': 'default.jpg',
            'description': 'Your number is: ' + str(my_rand)
        }
        data.append(temp)
    return jsonify(list=data)


if __name__ == '__main__':
    app.run(debug=True)
