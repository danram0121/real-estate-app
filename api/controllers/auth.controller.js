import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // create a new user and save it to the database
}

export const login = (req, res) => {
    // db operations

}

export const logout = (req, res) => {
    // db operations

}

