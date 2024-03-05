//* sonra db.js içine veritabanına bağlanmak için alttakileri yazdık mongoose require ettik biz aslında .then() den önce bağlantı yapmış olduk bu bağlantı sonucu bize promise döncek bunu yakalamak için .then dedim yani eğer
//* bağlantı sorunsuz çalışırsa console'a veritabanına başarılı şekilde bağlandı yaz eğer hata olursa da console'da o hatayı göster diyorum ve bu bağlantıyı export ettik en sonda da 
import mongoose from "mongoose";

const conn= ()=>{
    //* mongoose ' a ait olan connect fonksiyonu oluşturcam. ilk parametre olarak oluşturduğumuz env dosyası içindeki DB_URI ifadesini vericez. Yani veritabanın verdiği stringi vermiş oluyoz
    //* ikinci parametre olarak ise buraya configration objesi açıcaz
    mongoose.connect(process.env.DB_URI, {
        dbName: "lenslight_tr",
        //! bu alttaki ikisi hata veriyordu yazmayınca düzeldi 
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }).then(()=>{
        console.log("Connected to the DB successfully")
    }).catch((err)=>{
        console.log(`DB connection err: ${err}`)
    })
}

export default conn;