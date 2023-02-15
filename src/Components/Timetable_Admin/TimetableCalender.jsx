import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import{ timetableData} from './TimetableData';
function TimetableCalendar(props) {
    const events = props.timetableData.map((event) => {
      return {
        title: event.course,
        start: event.start_time,
        end: event.end_time,
        dow: event.day_of_week
      };
    });
  
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events}
      />
    );
  }
  
  export default TimetableCalendar;