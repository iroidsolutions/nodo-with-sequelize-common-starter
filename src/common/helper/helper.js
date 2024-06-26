

/**
 * random string generator
 * @param {*} givenLength 
 * @returns 
 */
export const randomStringGenerator = (givenLength = 70) =>{
    const characters = 
    givenLength > 10
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" ;

    const length = givenLength;
    let randomStr = "";

    for(let i = 0; i< length; i++){
        const randomNum = Math.floor(Math.random() * characters.length);
        randomStr += characters[randomNum];
    }
    return randomStr
}

/**
 * randomString : generate random string for given length
 * @param {number} length : length of random string to be generated (default 75)
 * @return {number} : generated random string
 */
export const randomNumberGenerator = (givenLength = 5) => {
    const characters = "123456789";
    const length = givenLength;
    let randomStr = "";
  
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * characters.length);
      randomStr += characters[randomNum];
    }
    return randomStr;
  };


  export const SuccessResponceHandle = (statusCode, message,data)=>{
    return {
      status : statusCode,
      message : message,
      data: data
    }
  }



 