import user from '../model/user';

class register{
    static reg(req,res){
        const username = req.body.username;
        const password =  req.body.password;
        user.forEach(user=>{
            if (!user.username === username && !user.password === password){
                user.create({username: username, password: password, role: 'user'})
            }
        })

    }
}