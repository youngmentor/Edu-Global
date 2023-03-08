import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';
import "./Report_Stu.css"
import { useSelector } from 'react-redux';
function Report_Stu() {
  const student = useSelector((state) => state.Commerce.student.result)
  const [studentName, setStudentName] = useState('');
  const [results, setResults] = useState([]);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [waitImage, setWaitImage] = useState(false)
  const [waitName, setWaitName] = useState(false)

  const getResult = async () => {
    // console.log(results)
    const res = await axios.get(`https://eduglobal.onrender.com/api/teacher/${student}`)
    setResults(res.data.data);
    // console.log(res)
    setWaitImage(true)
    setWaitName(true)
  }

  useEffect(() => {
    getResult()
  }, []);

  const StudentResult = { ...results }


  function downloadImage(url, imageFormat) {
    axios.get(`https://eduglobal.onrender.com/api/teacher/${student}`, { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `image.jpeg`);
        // console.log(url)
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div className='Report_Student_Main'>
      {results ? <div>
        {waitName ? <h2>{StudentResult.studentName.studentName} </h2> : "Laoding Name"}
        <p>{StudentResult.currentSchoolTerm} Results</p>
        <div>
          {waitImage ?
            <img src={results.resultImage.url} /> : <p>Loading results</p>}
        </div>
      </div> : "loading"}
      {!isDownloaded && (
        <button className="DownloadAdminBtt" onClick={downloadImage} >Download Result</button>
      )}

    </div>
  );
}
export default Report_Stu;
// onClick={handleDownload}
// {!isDownloaded && (
//   <button  className="DownloadAdminBtt" >Download Result</button>
// )}