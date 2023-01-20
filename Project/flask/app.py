#!/usr/bin/python3
from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
app = Flask(__name__)

app.config['SECRET_KEY'] = '8e6e5b2112fd71b3d9c49994c6ad2be3'

posts = [
    {
        'author': 'Erick adikah',
        'title': 'blog post 1',
        'content': 'First postcontent',
        'date_posted': 'January 15th, 2023'
    },
    {
        'author': 'Duncun Bett',
        'title': 'blog post 4',
        'content': 'how to make your teeth white',
        'date_posted': 'January 25th, 2023'
    },
    {
        'author': 'Dennis Berrut',
        'title': 'blog post 6',
        'content': 'how to make cofee white',
        'date_posted': 'January 25th, 2023'
    },
    
]
@app.route("/")
@app.route("/home", strict_slashes=False)
def home():
    return render_template('home.html', posts=posts)


@app.route("/about")
def about():
    return render_template('about.html', title='About')

@app.route("/register", methods=['GET', 'POST'])
def register():
    """registration route"""
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')#form valid and redirected
        return redirect(url_for('home'))#pop up massage
    return render_template('register.html', title='Register', form=form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    """registration route"""
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'erickadikah2030@gmail.com' and form.password.data == 'password':
            flash('Logged in Succesfully', 'succes')
            return redirect(url_for('home'))
        else:
            flash('Login Unseccesful, Please check user name and password' 'danger')
    return render_template('login.html', title='Login', form=form)


if __name__=='__main__':
    app.run(debug=True)
