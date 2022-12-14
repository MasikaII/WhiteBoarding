from flask import Flask, render_template, url_for, flash
from forms import RegistrationForm, LoginForm
app = Flask(__name__)

app.config['SECRET_KEY'] = '33a849461854d67eb2f5e573391ce702'
posts = [
    {
        'author': 'Erick Adikah',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2022'
    },
    {
        'author': 'Samuel Adikah',
        'title': 'Blog Post 2',
        'content': 'third post content',
        'date_posted': 'April 22, 2022'
    }

]


@app.route("/")
@app.route("/home/")
def home():
    return render_template('home.html', posts=posts)


@app.route("/about")
def about():
    return render_template('about.html', title='About')

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Acount created for {form.username.data}!')
    return render_template('register.html', title='Registar', form=form)

@app.route("/login")
def login():
    form = LoginForm()
    return render_template('Login.html', title='Login', form=form)


if __name__ == '__main__':
    app.run(debug=True)