import user from '../model/user';


class login{
    static logingIn(req,res,next){
        const data = {
            username : req.body.username,
            password : req.body.password
        };
        user.findOne({ where: { username: data.username } }).then(results => {
            if (!results){
                req.session.err = 'Incorrect username or password.';
                res.redirect('/login')
            }
            else if (data.password != results.password) {
                req.session.err = 'Incorrect password.';
                res.redirect('/login')
            }
            else {
                req.session.user = results;
                res.send('ok')
            }
        }).catch(err => {
            req.session.err = err;
            res.redirect('/login')
        });
    }
}

export default login;