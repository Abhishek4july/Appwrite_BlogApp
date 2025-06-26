import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;


    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId)
        
        // setKey(conf.appwriteApiKey);
        
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
           const userAccount=await this.account.create(ID.unique(),email,password,name);
           if(userAccount){
            return this.login({email,password})
           }
           else{
            return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }


    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service::getCurrentUser::error",error);
        }

        return null
    }

  async logout() {
  try {
    await this.account.deleteSession('current'); // Only deletes current session properly
    return true;
  } catch (error) {
    console.log("Appwrite service::logout::error", error);
    return false;
  }
}


}

const authService=new AuthService();


export default authService
