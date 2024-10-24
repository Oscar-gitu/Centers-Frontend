export function convertTimeTable(data) {
  let weekdays, saturday, sunday;

  if (data.timeTable) {
    weekdays = data.timeTable.weekdays
      ? `L-V ${data.timeTable.weekdays[0]} `
      : "";
    saturday = data.timeTable.saturday
      ? `/ S ${data.timeTable.saturday[0]} `
      : "";
    sunday = data.timeTable.sunday ? `/ D ${data.timeTable.sunday[0]} ` : "";
  } else {
    return "Sin informacion";
  }

  return `${weekdays} ${saturday} ${sunday}`;
}

export function convertAddress(data) {
  return `${data?.street || ''} ${data?.number  || ''} ${data?.neighborhood  || ''}`;
}