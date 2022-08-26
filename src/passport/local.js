import passport from "passport"
import { Strategy } from "passport-local"
import UserContainer from "../daos/users.js"

const containerUsers = new UserContainer()

const LocalStrategy = Strategy

passport.use("register", new LocalStrategy({
    usernameField: "nombre",
    passwordField: "pwd",
    passReqToCallback: true
}, async (req, nombre, pwd, done) => {
    const user = await containerUsers.getByName(nombre)
    if (user) {
        return done(null, false)
    }
    const newUser = {
        nombre: nombre,
        pwd: pwd
    }
    await containerUsers.save(newUser)
})
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await containerUsers.getById(id)
    done(null, user)
})

passport.use("login", new LocalStrategy({
    usernameField: "nombre",
    passwordField: "pwd",
    passReqToCallback: true
}, async (req, nombre, pwd, done) => {
    const user = await containerUsers.getById(nombre)
    if (!user || user.pwd !== pwd) {
        return done(null, false)
    }
    done(null, user) //hacer los error.ejs | contraseñas encriptadas | botones logueo/registro
})
)
