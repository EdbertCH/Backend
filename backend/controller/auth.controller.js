import user from '../model/user';

class auth{
    static role(req,res){
        const usernames = req.body.username;
        const passwords =  req.body.password;
        user.forEach(user=>{
            if (user.username === usernames && user.password === passwords && user.role === 'admin'){
                return res.send(console.log('admin'))
            }
            else if (user.username === usernames && user.password === passwords && user.role === 'user'){
                return res.send(console.log('user'))
            }
        }) 
    }
}

export default auth;