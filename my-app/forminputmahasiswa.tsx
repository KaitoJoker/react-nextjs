import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";

 
 const koneksiMahasiswa = axios.create({
 
  baseURL: "http:5000/api/mahasiswa"
});

export default function FormMahasiswa() {
    const [statenama, setNama] = useState("");
    const [statenim, setNim] = useState("");
    const [statetanggal, setTanggal] = useState("2018-07-22");
    const [statealamat, setAlamat] = useState("");
    const [statefoto, setFoto] = useState("");
    const [mahasiswa, setMahasiswa] =  useState(null);
    const [stateadd,setAdd]=useState("hide");


    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
   
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
   
        return [year, month, day].join('-');
    };
     
  
    const handleAdd = (event) => {
        alert(stateadd);
         setAdd("show");
    
         alert(stateadd);
         
      };
       const handleDelete = (event) => {
                event.preventDefault();
                var nim = event.target.value;
                koneksiMahasiswa.delete(`/${nim}`)
                  .then(response => {
                    console.log('Data berhasil dihapus:', response.data);
                    setMahasiswa(
                      mahasiswa.filter((mahasiswa) => {
                         return mahasiswa.nim !== nim;
                      }))
                 
                    // Lakukan langkah-langkah lain setelah penghapusan data
                  })
                  .catch(error => {
                    console.error('Gagal menghapus data:', error);
                  })
              }
    
              const handleEdit = (event) => {
                event.preventDefault();
                var nim = event.target.value;
               
                   const mhsEdit =  mahasiswa.filter((mahasiswa) => {
                         return mahasiswa.nim == nim;
                      });
                      if(mhsEdit!=null){
    
                        setNama(mhsEdit[0].nama);
                        setNim(mhsEdit[0].nim);
                        setAlamat(mhsEdit[0].alamat);
                        setTanggal(formatDate(mhsEdit[0].tanggal_lahir));
                        setFoto(mhsEdit[0].foto);
    
                      }
              }
      useEffect(() => {
          async function getMahasiswa() {
            const response = await koneksiMahasiswa.get("/").then(function (axiosResponse) {
                setMahasiswa(axiosResponse.data.data);
         
             })
             .catch(function (error) {  
              alert('error from mahasiswa in api mahasiswa: '+error);
             });;
              }
          getMahasiswa();
        }, []);
    
        if(mahasiswa==null){
            return(
              <div>
                waiting...
              </div>
            )
            }else{
            <div>
                <button id="btnadd" onClick={handleAdd} className={!stateadd}>add</button>
              
                  <form id="formadd" className={stateadd}  >
                   <table border={0}>
                       <tbody>
                       <tr>
                       <td> <label> nim:</label></td>
                       <td><input type="text" id="nim"  value={statenim} />
                         {/* onChange={handleOnchangeNim}  /> */}
                         </td>
                   </tr>
                   <tr>
                       <td>  <label> nama:</label></td>
                       <td><input type="text" id="nama"  value={statenama}
                          onChange={(e) => setNama(e.target.value)}
                          /></td>
                   </tr>
                   <tr>
                       <td>  <label> Foto:</label></td>
                       <td>   <input
                               type="file" name="foto"/> <img src={statefoto} width="80"/> </td>
                   </tr>
                   <tr>
                      <td>
                        <label> Tanggal Lahir:</label>
                      </td>
                       <td>  <input type="date" value={statetanggal}
                      min="1970-01-01" max="2025-12-31"/>
                </td>
                   </tr>
                   <tr>
                       <td>  <label> alamat:</label></td>
                       <td><textarea  id="address" style={{resize: "none"}} value={statealamat}></textarea></td>
                   </tr>
                       </tbody>
                     </table>
                     <input type="submit" />
                    
                     </form>  
           
<form id="formedit" >
 <table border={0}>
   <tbody>
   <tr>
   <td> <label> nim:</label></td>
   <td><input type="text" id="nim"  value={statenim} />
     {/* onChange={handleOnchangeNim}  /> */}
     </td>
</tr>
<tr>
   <td>  <label> nama:</label></td>
   <td><input type="text" id="nama"  value={statenama}
      onChange={(e) => setNama(e.target.value)}
      /></td>
</tr>
<tr>
   <td>  <label> Foto:</label></td>
   <td>   <input
           type="file" name="foto"/> <img src={statefoto} width="80"/> </td>
</tr>
<tr>
   <td>  <label> Tanggal Lahir:</label></td>
   <td>  <input type="date" value={statetanggal}
  min="1970-01-01" max="2025-12-31"/>
</td>
</tr>
<tr>
   <td>  <label> alamat:</label></td>
   <td><textarea  id="address" style={{resize: "none"}} value={statealamat}></textarea></td>
</tr>
   </tbody>
 </table>
 <input type="submit" />

 </form>  
<br/>
<br/>

Tabel Mahasiswa hasil get Local Nodejs
   
    <table border={1}>
       <thead>
           <tr>
              <td><b>Nim</b></td>
              <td><b>Nama</b></td>
              <td><b>Foto</b></td>
              <td><b>Tanggal Lahir</b></td>
              <td><b>Alamat</b></td>
              <td colSpan={2}><b>Action</b></td>
           </tr>
       </thead>
       <tbody>
        {mahasiswa.map((mhs) =>
            <tr>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td><img src={mhs.foto} width="80"/></td>
              <td>{mhs.tanggal_lahir}</td>
              <td>{mhs.alamat}</td>
              <td><button onClick={handleEdit} value={mhs.nim}>edit</button></td>
              <td><button onClick={handleDelete} value={mhs.nim}>delete</button></td>
            </tr>
          )}    
        </tbody>

    </table>
    
    </div>
}

}




                   