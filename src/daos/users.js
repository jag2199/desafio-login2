import Container from "../container.js"
import usersSchema from "../schemas/usersSchema.js"



export default class UserContainer extends Container {
    constructor() {
        super("users", usersSchema)
    }
}
