import assert from 'assert';
import login from '../utils/login.mjs';

 it("Login API should return a vailid login toke",async ()=>{

    const loginToken= await login({userName:"iwonttellyou@unknown.com", password: "!1Passw"});

    assert.equal(loginToken.length,36);

 })