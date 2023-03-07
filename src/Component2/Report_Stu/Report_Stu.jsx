import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';
import "./Report_Stu.css"
import { useSelector } from 'react-redux';
function Report_Stu () {
  const student = useSelector((state) => state.Commerce.student.result)
  const [studentName, setStudentName] = useState('');
  const [results, setResults] = useState([]);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const Result = () =>{
 const res =   axios.get(`https://eduglobal.onrender.com/api/teacher/${student}`)
    setResults(res.data.result);
  }

  useEffect(() => {
    Result()
  }, []);

  // const handleDownload = () => {
  //   const resultsString = JSON.stringify(results);
  //   const blob = new Blob([resultsString], { type: 'application/json' });
  //   FileSaver.saveAs(blob, `${student.resultImage.url}`);
  //   setIsDownloaded(true);
  // }

  return (
    <div className='Report_Student_Main'>
      <h2>{results.studentName}olalere </h2>
        <div>
         {/* <img src={i.resultImage.url} /> */}
        </div>  
        <button  className="DownloadAdminBtt" >Download Result</button>
    </div>
  );
}
export default Report_Stu;
// onClick={handleDownload}
// {!isDownloaded && (
//   <button  className="DownloadAdminBtt" >Download Result</button>
// )}