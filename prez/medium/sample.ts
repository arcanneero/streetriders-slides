//Endpoint
interface RestUser {
    name: string
    lastname: string
}

//Domain
interface User {
    name: string
    lastname: string
    birthDate: Date
}

//Databases
interface DataUser {
    version: number
    name: string
    lastname: string
    birthDate: Date
}

class UserEndpoint {
    service = new UserService()
    get(user: string): RestUser {
        return this.service.readUser(user)
    }

    post(user: RestUser): RestUser {
        return this.service.writeUser(user as User)
    }
}

class UserService {
    repository = new UserRepository()
    readUser(login: string): User {
        return this.repository.read(login)
    }

    writeUser(user: User): User {
        return this.repository.write(user)
    }
}

class UserRepository {
    database = new UserRepository()
    read(login: string): User {
        return {} as DataUser
    }

    write(user: User): User {
        return  {} as DataUser
    }
}