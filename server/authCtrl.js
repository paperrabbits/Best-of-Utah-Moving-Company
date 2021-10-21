const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        console.log('hit-ctrl-BOUM');
        console.log(`EMAIL: ${email}, PASSWORD: ${password}`);
        
        let foundUser = await db.auth.check_user(email);
        // let foundGamer = await db.auth.check_username(username);

            if (foundUser[0]) {
                console.log(400, 'email taken')
                return res.status(400).send('Email already in use')
            };

            // if (foundGamer[0]) {
            //     console.log(400, 'username taken')
            //     return res.status(400).send('Username taken')
            // };

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await db.auth.register(email, hash);
        let userAccount = await db.auth.create_account(newUser[0].employee_id);
        let sessionUser = {...newUser[0], ...userAccount[0]};

        req.session.user = sessionUser;
        console.log(req.session.user, 'registerBACK-BOUM');
        res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const {email, password} = req.body;
        console.log(email, password);
        const db = req.app.get('db');
        // console.log(`EMAIL: ${email}, USERNAME: ${username}, PASSWORD: ${password}`)
        console.log('hit CTRL-BOUM');
        console.table(req.body);

        let foundUser = await db.auth.check_player(email);
        // let foundUsername = await db.auth.check_username(username);

            if (!foundUser[0]) {
                console.log('Email does not exist', 'LOGINBACK')
                return res.status(400).send('Email does not exist')
            };
            
            // if (!foundUsername[0]) {
            //     console.log('Username does not exist', 'LOGINBACK')
            //     return res.status(400).send('Username does not exist')
            // };

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);

            if (!authenticated) {
                console.log('Incorrect password', 'loginBACK')
                return res.status(401).send('Incorrect password')
            };
        
        delete foundUser[0].password;
        req.session.user = foundUser[0];
        console.table(foundUser[0]);
        res.status(202).send(req.session.user);
    },

    logout: (req, res) => {
        console.log(req.session.user, 'LOGOUTBACK-BOUM');
        console.table(req.session.user);
        req.session.destroy();
        res.sendStatus(200);
    }
}