enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day > 4) {
    return true;
  }
  return false;
}