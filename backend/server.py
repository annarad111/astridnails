from flask import Flask, render_template, request, redirect, url_for, session


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", token="Hello Flask")

app.run(debug=True)
