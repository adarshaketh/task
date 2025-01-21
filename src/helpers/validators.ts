function validateEmail(email: string): boolean {
    //validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
}

function validatePhone(phno: string): boolean {
    //remove +, or other characters
    const cleanPhone = phno.replace(/\D/g, '');
    
    //check phno is 10 digits
    if (cleanPhone.length !== 10) {
        return false;
    }

    //check all are numbers
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(cleanPhone);
}

function validatePassword(password:string):boolean{
    if(password.length<8){
        return false;
    }
    //check for 
    return true;
}

export {validateEmail,validatePassword,validatePhone}