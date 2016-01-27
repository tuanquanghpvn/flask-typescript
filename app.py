from flask import Flask, render_template, jsonify

app = Flask(__name__)
app.config.from_object('app_config')

@app.route('/')
def index():
    return render_template('index.html', body_class="index")

@app.route('/json')
def data():
    data = []
    for i in xrange(10):
        temp = {
            'title': 'Hello world ' + str(i),
            'image': 'default.jpg',
            'description': 'Hello everyone'
        }
        data.append(temp)
    return jsonify(list=data)

if __name__ == '__main__':
    app.run(debug=True)
