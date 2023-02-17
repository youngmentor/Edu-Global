import React, {useState} from 'react'
import "./Report_Stu.css"
const Report_Stu = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const downloadFile = () => {
    axios.get(fileUrl, {
      responseType: 'blob'
    })
    .then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch(error => {
    });
  }
  return (
    <div className='Report_Student_Main'>
     <h3>Download your result here</h3>
        <button type="submit" className='UploadAdminBtt'>Download Result</button>
    </div>
  )
}


export default Report_Stu