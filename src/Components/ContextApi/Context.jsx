import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {


  const [s_dashboard, setDashboard] = useState(true)
  const [s_classes, setClasses] = useState(false)
  const [s_attendance, setAttendance] = useState(false)
  const [s_subject, setSubject] = useState(false)
  const [s_student, setStudent] = useState(false)
  const [s_teacher, setTeacher] = useState(false)
  const [s_timetable, setTimetable] = useState(false)
  const [s_fee, setFee] = useState(false)

  const S_Dashboard = () => {
    setDashboard(true)
    setClasses(false);
    setAttendance(false);
    setSubject(false);
    setStudent(false);
    setTeacher(false);
    setTimetable(false);
    setFee(false);
  }
  const S_Classes = () => {
    setDashboard(false)
    setClasses(true);
    setAttendance(false);
    setSubject(false);
    setStudent(false);
    setTeacher(false);
    setTimetable(false);
    setFee(false);
  }
  const S_Attendance = () => {
    setDashboard(false)
    setClasses(false);
    setAttendance(true);
    setSubject(false);
    setStudent(false);
    setTeacher(false);
    setTimetable(false);
    setFee(false);
  }
  const S_Subject = () => {
    setSubject(true);
    setDashboard(false)
    setClasses(false);
    setAttendance(false);
    setStudent(false);
    setTeacher(false);
    setTimetable(false);
    setFee(false);
  }
  const S_Student = () => {
    setStudent(true);
    setDashboard(false)
    setClasses(false);
    setAttendance(false);
    setSubject(false);

    setTeacher(false);
    setTimetable(false);
    setFee(false);
  }
  const S_Teacher = () => {
    setStudent(false);
    setDashboard(false)
    setClasses(false);
    setAttendance(false);
    setSubject(false);
    setTeacher(true);
    setTimetable(false);
    setFee(false);
  }
  const S_Timetable = () => {
    setStudent(false);
    setDashboard(false)
    setClasses(false);
    setAttendance(false);
    setSubject(false);
    setTeacher(false);
    setTimetable(true);
    setFee(false);
  }
  const S_Fee = () => {
    setStudent(false);
    setDashboard(false)
    setClasses(false);
    setAttendance(false);
    setSubject(false);
    setTeacher(false);
    setTimetable(false);
    setFee(true);
  }


  return (
    <ThemeContext.Provider
      value={{
        s_dashboard, S_Dashboard, s_classes, S_Classes,
        s_attendance, S_Attendance, s_subject, S_Subject, s_student, S_Student,
        s_teacher, S_Teacher, s_timetable, S_Timetable, s_fee, S_Fee





      }}>
      {children}
    </ThemeContext.Provider>
  )
}
// const [classes, setClasses] = useState(false)
// const [attendance, setAttendance] = useState(false)
// const [subject, setSubject] = useState(false)
// const [student, setStudent] = useState(false)
// const [teacher, setTeacher] = useState(false)
// const [timetable, setTimetable] = useState(false)
// const [fee, setFee] = useState(false)