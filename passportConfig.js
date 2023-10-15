// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy



//     passport.use(new localStrategy(async (firstname, password, done) => {
//         try {
//             const user = await user.findOne({ firstname });
//             if (!user) return done(null, false);

//             if (user.password !== password) return done(null, false);
//             return done(null, user);
//         } catch (error) {
//             return done(erro, false)
//         }



//     passport.serializeUser((user,done)=>{
//           done(null,user.id);
//     });
//     passport.deserializeUser((id,done)=>{
//         try{
//             const user = user.findByid(id);
//             done(null,user);
//         } catch (error){
//             done(error,false);
//         }
       
//     })

//     }));

    

//     module.exports = (passport);

