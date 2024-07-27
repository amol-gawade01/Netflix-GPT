export const ValidateData = (email,pass) => {
    const validEmail =  /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass)

    if(!validEmail) return "Email is not valid !";
    if(!validPassword) return "Password is not valid !";
    
    return null;
}