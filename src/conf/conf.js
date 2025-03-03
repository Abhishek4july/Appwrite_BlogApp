const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
<<<<<<< HEAD
    tinyMCEKey: String(import.meta.env.VITE_APIKEY_TINYMCE)
=======
    appwriteApiKey:String(import.meta.env.VITE_APPWRITE_APIKEY)
>>>>>>> afc6c55244a8c61c2f2b1262a4ef13e476f4b9f3
}


export default conf
